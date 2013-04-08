var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js');

exports.ForwardCache    = [];
exports.Lambda          = 0.01;
exports.Example         = undefined;

exports.Configure = function (Labels, Features) {
    Shared.Labels      = Labels;
    Shared.Features    = Features;
};

// may need to account for the globals labels, we'll see.
exports.Forward = function (kIndex, vLabel) {
    return Standard.Sum(Shared.Labels, function (vIndex) {
        return Shared.PsiESF(Shared.Labels[vIndex], vLabel, kIndex) 
             * exports.Forward(kIndex - 1, Shared.Labels[vIndex]);
    });
};

exports.Backward = function (kIndex, vLabel) {
    return Standard.Sum(Shared.Labels, function (vIndex) {
        return Shared.PsiESF(vLabel, Shared.Labels[vIndex], kIndex) 
             * exports.Backward(kIndex + 1, Shared.Labels[vIndex]);
    });
};

exports.ForwardBackward = function (kIndex, From, To) {
    return exports.Forward(kIndex - 1, From) 
         * Shared.PsiESF(From, To, kIndex) 
         * exports.Backward(kIndex, To);
};

exports.Train = function (Example) {
    var pIndex      = 0
      , wIndex      = 0
      , expectation = undefined;
    
    Shared.Sequence = Example.Observed;
    exports.Example = Example;
    // init forward and backward values
    for (pIndex; pIndex < Shared.Sequence.length; pIndex++) {
        for (wIndex; wIndex < Shared.Features.length; wIndex++) {
            expectation = Standard.Sum(Shared.Labels, function (vIndex) {
                return Truth() * exports.ForwardBackward(pIndex, ....//tutorial says the sum goes over y,y* so two loops needed?);
            });
        }
    }
};
