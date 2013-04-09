var Standard    = require('./Standard.js')
  , Shared      = require('./Shared.js');

exports.ForwardCache    = [];
exports.Lambda          = 0.01;
exports.Example         = undefined;

exports.Configure = function (Labels, Features) {
    Shared.Labels      = Labels;
    Shared.Features    = Features;
};

exports.MatrixCache = [];
exports.Matrix = function (kIndex, From, To) {
    // establish a cache and use it
    return Shared.PsiESF(From, To, kIndex);
};

// When called outside itself, From is Start, Next is Stop, kIndex is SequenceLength - 1
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
         * Shared.Features[wIndex].Func(From, To, kIndex);
};

exports.Expectation = function (wIndex, From, kIndex) {
    Standard.Sum(Shared.Labels, function (vIndex) {
        return exports.LabelWeight(wIndex, From, Shared.Labels[vIndex], kIndex);
             * Shared.PsiESF(From, Shared.Labels[vIndex], kIndex)
             / exports.MatrixForward(
                  Shared.Sequence.length - 1
                , Shared.Globals.BEGIN
                , Shared.Globals.END
               );
    });
};
//is already for one i, example
// for every t
// for every k
exports.Train = function (Example) {
    var pIndex      = 0
      , wIndex      = 0
      , expectation = undefined;
    
    Shared.Sequence = Example.Observed;
    exports.Example = Example;
    // init forward and backward values
    for (pIndex; pIndex < Shared.Sequence.length; pIndex++) {
        for (wIndex; wIndex < Shared.Features.length; wIndex++) {
            // we must only update the weight if the feature comes out non-zero
            
            Shared.Features[wIndex].Weight += exports.Lambda(Fjxy - all y'(Fjxy * p(y')));
            
            expectation = Standard.Sum(Shared.Labels, function (vIndex) {
                return Truth() * exports.ForwardBackward(pIndex,);
                 ....//tutorial says the sum goes over y,y* so two loops needed?);
            });
        }
    }
};
