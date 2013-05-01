var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js')
  , Capitalization  = require('./dictionaries/Capitalization.js')
  , os          = require('os');

exports.Cache           = [];
exports.Example         = undefined;

exports.Configure = function (Labels, Features) {
    Shared.Labels      = Labels;
    Shared.Features    = Features;
};

exports.Lambda = function (arg) {
    return arg * 0.01;
};

exports.Matrix = function (kIndex, From, To) {
    if (exports.Cache[kIndex]) {
        if (exports.Cache[kIndex][From] !== undefined) {
            if (exports.Cache[kIndex][From][To] !== undefined) {
                return exports.Cache[kIndex][From][To];
            }
        } else exports.Cache[kIndex][From] = {};
    } else {
        exports.Cache[kIndex] = {};
        exports.Cache[kIndex][From] = {};
    }
    
    return exports.Cache[kIndex][From][To] = Shared.PsiESF(From, To, kIndex);
};

exports.ForwardCache = [];

exports.MatrixForward = function (kIndex, From, Next) {
    if (exports.ForwardCache[kIndex]) {
        if (exports.ForwardCache[kIndex][From] !== undefined) {
            if (exports.ForwardCache[kIndex][From][Next] !== undefined) {
                return exports.ForwardCache[kIndex][From][Next]
            }
        } else exports.ForwardCache[kIndex][From] = {};
    } else {
        exports.ForwardCache[kIndex]        = {};
        exports.ForwardCache[kIndex][From]  = {};
    }
    
    if (kIndex === 1) {
        return exports.Matrix(1, From, Next);
    } else return Standard.Sum(Shared.Labels, function (vIndex) {
        return (exports.ForwardCache[kIndex][From][Next] = exports.MatrixForward(kIndex - 1, From, Shared.Labels[vIndex])
             * exports.Matrix(kIndex, Shared.Labels[vIndex], Next));
    });
};

exports.LabelWeight = function (wIndex, From, To, kIndex) {
    return Shared.Features[wIndex].Weight 
         * Shared.FeatureFunctions[Shared.Features[wIndex].FuncID].apply(Shared, Shared.Features[wIndex].Args.concat(From, To, kIndex));
};

exports.Expectation = function (wIndex, From, kIndex) {
    return Standard.Sum(Shared.Labels, function (vIndex) {
        return exports.LabelWeight(wIndex, From, Shared.Labels[vIndex], kIndex)
             * Shared.PsiESF(From, Shared.Labels[vIndex], kIndex)
             / exports.MatrixForward(
                  Shared.Sequence.length - 1
                , Shared.Globals.BEGIN
                , Shared.Globals.END
               );
    });
};

var BREAK_SPACES = exports.BREAK_SPACES = {
      ' '   : true
    , '\n'  : true
    , '\t'  : true
};

exports.FormatTrainingData = function (Raw) {
    var Divider = '------'
      , Items   = Raw.split(Divider)
      , tIndex  = 0
      , kIndex  = 0
      , tmp     = undefined
      , bkt     = undefined
      , cup     = undefined
      , res     = []
      , bctr    = 0
      , Breaks  = {
          ' '   : true
        , '\n'  : true
        , '\t'  : true
      };
    
    for (tIndex; tIndex < Items.length; tIndex++) {
        tmp     = [''];
        bkt     = [''];
        cup     = {};
        kIndex  = 0;
        bctr    = 0;
        var word = '';
        for (kIndex; kIndex < Items[tIndex].length; kIndex++) {
            if  (!Breaks[Items[tIndex][kIndex]]) {
                if (bctr % 2) {
                    tmp[tmp.length - 1] += Items[tIndex][kIndex];
                    
                } else bkt[bkt.length - 1] += Items[tIndex][kIndex];
            } else {
                if (bctr % 2) {
                    tmp.push('');
                } else bkt.push('');
                bctr++;
            }
        }
        tmp.unshift(Shared.Globals.BEGIN);
        tmp[tmp.length - 1] = Shared.Globals.END;
        bkt[0] = Shared.Globals.BEGIN;
        bkt[bkt.length - 1] = Shared.Globals.END;
        cup.Observed    = tmp;
        cup.Label       = bkt;
        res.push(cup);
    } return res;
};

exports.Train = function (Example, MongoStore) {
    var pIndex      = 1
      , wIndex      = undefined
      , relevancy   = false
      , outcome     = undefined
      , expected    = undefined
      , starttime   = os.uptime()
      , UpdateSet   = undefined;
    
    Shared.Sequence         = Example.Observed;
    exports.Example         = Example;
    exports.Cache           = [];
    exports.ForwardCache    = [];
    
    for (pIndex; pIndex < Shared.Sequence.length; pIndex++) {
        console.log('Sequence index iteration, time since start:', os.uptime() - starttime);
        UpdateSet = {};
        for (wIndex = 0; wIndex < Shared.Features.length; wIndex++) {
            relevancy = Shared.FeatureFunctions[Shared.Features[wIndex].FuncID].apply(
                Shared
              , Shared.Features[wIndex].Args.concat(
                    exports.Example.Label[pIndex - 1]
                  , exports.Example.Label[pIndex]
                  , pIndex)
              );
            if (!relevancy) continue;
            outcome = relevancy * Shared.Features[wIndex].Weight;
            expected = exports.Expectation(
                          wIndex
                        , exports.Example.Label[pIndex - 1]
                        , pIndex
                       );
            Shared.Features[wIndex].Weight += exports.Lambda(outcome - expected);
            if (MongoStore) {
                UpdateSet[Shared.Features[wIndex]._id] = {'Weight' : Shared.Features[wIndex].Weight};
            }
        }
        if (MongoStore) {
            var id = undefined;
            for (id in UpdateSet) {
                if (UpdateSet.hasOwnProperty(id)) {
                    MongoStore.Update(MongoStore.Features, id, UpdateSet[id], function () {
                        // address writeConcern
                    });
                }
            }
        }
    }
};
