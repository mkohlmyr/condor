var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js')
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

exports.Train = function (Example) {
    var pIndex      = 1
      , wIndex      = undefined
      , relevancy   = false
      , outcome     = undefined
      , expected    = undefined
      , starttime   = os.uptime();
    
    Shared.Sequence         = Example.Observed;
    exports.Example         = Example;
    exports.Cache           = [];
    exports.ForwardCache    = [];
    
    for (pIndex; pIndex < Shared.Sequence.length; pIndex++) {
        console.log('Sequence index iteration, time since start:', os.uptime() - starttime);
        for (wIndex = 0; wIndex < Shared.Features.length; wIndex++) {
            relevancy = Shared.FeatureFunctions[Shared.Features[wIndex].FuncID].apply(
                Shared
              , Shared.Features[wIndex].Args.concat(
                    exports.Example.Label[pIndex - 1]
                  , exports.Example.Label[pIndex]
                  , pIndex)
              );
            if (!relevancy) continue;
            //console.log(Shared.Sequence[pIndex], Shared.Features[wIndex].FuncID, Shared.Features[wIndex].Args);
            outcome = relevancy * Shared.Features[wIndex].Weight;
            expected = exports.Expectation(
                          wIndex
                        , exports.Example.Label[pIndex - 1]
                        , pIndex
                       );
            //console.log(outcome, expected);
            Shared.Features[wIndex].Weight += exports.Lambda(outcome - expected);
            //console.log(Shared.Features[wIndex].Weight);
        }
    }
};
