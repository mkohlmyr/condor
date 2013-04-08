var Standard    = require('./Standard.js');

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Labels      = [];
exports.Features    = [];
exports.Sequence    = undefined;

exports.PsiESF = function (From, To, Index) {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight 
             * exports.Features[wIndex].Func(From, To, Index);
    }));
};
