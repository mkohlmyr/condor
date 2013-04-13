var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js');

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

exports.MatrixForward = function (kIndex, From, Next) {
    if (kIndex === 1) {
        return Matrix(1, From, Next);
    } else return Standard.Sum(Shared.Labels, function (vIndex) {
        return exports.MatrixForward(kIndex - 1, From, Shared.Labels[vIndex])
             * Matrix(kIndex, Shared.Labels[vIndex], Next);
    });
};

exports.LabelWeight = function (wIndex, From, To, kIndex) {
    return Shared.Features[wIndex].Weight 
         * Shared.FeatureFunctions[Shared.Features[wIndex].FuncID].apply(Shared, Shared.Features[wIndex].Args);
};

exports.Expectation = function (wIndex, From, kIndex) {
    Standard.Sum(Shared.Labels, function (vIndex) {
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
      , wIndex      = 0
      , relevancy   = false
      , outcome     = undefined
      , expected    = undefined;
    
    Shared.Sequence     = Example.Observed;
    exports.Example     = Example;
    exports.Cache = [];
    
    for (pIndex; pIndex < Shared.Sequence.length; pIndex++) {
        for (wIndex; wIndex < Shared.Features.length; wIndex++) {
            relevancy = Shared.Features[wIndex].Func(
                           exports.Example.Label[pIndex - 1]
                         , exports.Example.Label[pIndex]
                         , pIndex
                        );
            if (!relevancy) continue;
            
            outcome = relevancy * Shared.Features[wIndex].Weight;
            expected = exports.Expectation(
                          wIndex
                        , exports.Example.Label[pIndex - 1]
                        , pIndex
                       );
            
            Shared.Features[wIndex].Weight += exports.Lambda(outcome - expected);
        }
    }
};
