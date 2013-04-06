var Standard = require('./Standard.js');

exports.Labels      = [];
exports.Features    = [];
exports.Cache       = [];
exports.Sequence    = undefined;

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Configure = function (Labels, Features) {
    exports.Labels      = Labels;
    exports.Features    = Features;
};


exports.Predict = function (Sequence) {
    var First   = {}
      , cIndex  = 1
      , vIndex  = undefined
      , top     = 0
      , arg     = undefined
      , tmp     = 0;
      
    First[exports.Globals.BEGIN] = 1;
    exports.Sequence = Sequence;
    exports.Cache.push(First);
    
    exports.Viterbi(exports.Sequence.length - 1, exports.Globals.END);
    
    var path = [exports.Globals.BEGIN];
    for (cIndex; cIndex < exports.Cache.length - 1; cIndex++) {
        for (vIndex in exports.Cache[cIndex]) {
            if ((tmp = exports.Cache[cIndex][vIndex]) > top) {
                top = tmp;
                arg = vIndex;
            }
        } path.push(arg);
    } path.push(exports.Globals.END);
    return path
};


exports.Viterbi = function (kIndex, vLabel) {
    if (exports.Cache[kIndex]) {
        if (exports.Cache[kIndex][vLabel] !== undefined) {
            return exports.Cache[kIndex][vLabel];
        }
    } else exports.Cache[kIndex] = {};
    return exports.Cache[kIndex][vLabel] = Standard.Max(kIndex > 1 ? exports.Labels : [exports.Globals.BEGIN], function (vIndex, ProxyLabels) {
        return exports.PsiESF(ProxyLabels[vIndex], vLabel, kIndex) * exports.Viterbi(kIndex - 1, ProxyLabels[vIndex]);
    });
};

exports.PsiESF = function (From, To, Index) {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight * exports.Features[wIndex].Func(From, To, Index);
    }));
};
