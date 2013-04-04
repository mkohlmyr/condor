exports.Labels      = [];
exports.FeatureSet  = [];
exports.Sequence    = undefined;

exports.Configure = function () {

};


exports.Predict = function (Sequence) {
    exports.Sequence = Sequence;
    
};

/**
 * Forward variable, a vector of size Labels.length
 * Every value in the matrix corresponds to the probability:
 * alpha[t](j) = p(x[1..t], y[t] = j)
 * Meaning the probability of the label at t being j, given x until t (?)
 **/
exports.AlphaT = function (input) {
    for (var l = 0; l < exports.Labels.length; l++) {
        this[exports.Labels[l]] = input ? input[l] : 0;
    }
};

// Cache is also known as set of AlphaT or forward variable set, holds one AlphaT for every index
exports.Cache = [];

// also known as the recursive definition of values for alpha[t](j)
// AKA FORWARD RECURSION (?!)
exports.SigmaUKV = function (kIndex, vLabel) {
    var yIndex = 0
      , result = 0;
    if (Cache.length > kIndex) {
        if (Cache[kIndex][vLabel]) {
            return Cache[kIndex][vLabel];
        }
    } else {
        Cache.push(new exports.AlphaT());
    }
    
    for (yIndex; yIndex < exports.Labels.length; yIndex++) {
        result += PSI * SigmaUKV(kIndex - 1, Labels[yIndex]);
    }
}


/****
FORWARD AND BACKWARD RECURSIONS COMPUTE Z(X)??????!!!!! (apparently f-b computes Z, yes)
The "marginal distributions for edges (probabilities of transission) may also be computed efficiently
::: THIS IS DONEN WITH FB
prob of trans yPrev to yCurrent at t = forward[t-1][yPrev]*PSI(yPrev,YCurr)*Back[t](Yt)
// THIS IS NEEDED FOR THE GRADIENT; BUT I THINK TESTING WITH VITERBI IS STILL SELF CONTAINED?!?!?!?
****/

// note that he describes "features" as being composed of one part that says is this label and one that says "im maing an observation"
// observation functions s.a. capitalized.
// removal of rarely seen or never seen features is okay, but will result in worse accuracy as they can make getting wrong answers less likely by having negative weight after training(?)
// Sha and pereira 2003 used 3.8 million features
    // that includes unsupported (never seen in training data)

exports.Viterbi = function (kIndex, vLabel) {
    // return max:
    // for every label i
    // PSI(v,i,x,k) * Viterbi(k - 1, i)
};

/**
 * 
 * 
 * From and To are members of Labels
 * 
 **/
exports.PsiESF = function (From, To, Index) {
    // return exp of:
    // sum over feature*weight for From, To, exports.Sequence, Index
};

most likely labeling YBAR = argmax over y for p(y|x) where ys are sets of labels
COMBINING RESULTS FROM FORWARD AND BACKWARD CAN COMPUTE MARGINAL DISTRIBUTIONS NEEDED FOR THE GRADIENT
:: 

// IM ACTUALLY THINKING THIS COULD BE SELF CONTAINED....
// in any case, below i provide the eq for p(y|x)

/*

p(y(KNOWN)|x) = 1/z * (Product over indices in sequence for: PSI(y[t],y[t-1], x[t]))

*/







exports.ForwardBackward = function (Index, Label) {
    var tmp;
    if (Index === (Sequence.length - 1)) {
        return 1;
    } else if (tmp = exports.Remembers(Index, Label)) {
        return tmp;
    } else {
        var result = 0;
        for (var y = 0; y < exports.Labels.length; y++) {
            result += () * exports.ForwardBackward(Labels[y], Index + 1);
        }
    }
};
