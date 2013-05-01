var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js');

exports.Cache       = [];
Shared.Sequence     = undefined;

exports.Configure = function (Labels, Features) {
    Shared.Labels      = Labels;
    Shared.Features    = Features;
};


exports.Predict = function (Sequence) {
    var First   = {}
      , cIndex  = 1
      , vIndex  = undefined
      , top     = 0
      , arg     = undefined
      , tmp     = 0;
      
    First[Shared.Globals.BEGIN] = 1;
    Shared.Sequence = Sequence;
    exports.Cache = [First];
    
    exports.Viterbi(Shared.Sequence.length - 1, Shared.Globals.END);
    
    var path = [Shared.Globals.BEGIN];
    for (cIndex; cIndex < exports.Cache.length - 1; cIndex++) {
        for (vIndex in exports.Cache[cIndex]) {
            if ((tmp = exports.Cache[cIndex][vIndex]) > top) {
                top = tmp;
                arg = vIndex;
            }
        } path.push(arg);
    } path.push(Shared.Globals.END);
    return path;
};


exports.Viterbi = function (kIndex, vLabel) {
    if (exports.Cache[kIndex]) {
        if (exports.Cache[kIndex][vLabel] !== undefined) {
            return exports.Cache[kIndex][vLabel];
        }
    } else exports.Cache[kIndex] = {};
    return exports.Cache[kIndex][vLabel] 
         = Standard.Max(kIndex > 1 ? Shared.Labels : [Shared.Globals.BEGIN], function (vIndex, ProxyLabels) {
            return Shared.PsiESF(ProxyLabels[vIndex], vLabel, kIndex) 
                 * exports.Viterbi(kIndex - 1, ProxyLabels[vIndex]);
    });
};
