exports.Max = function (Set, Evaluator) {
    var s   = 0
      , tmp = 0
      , top = 0;
    for (s; s < Set.length; s++) {
        if ((tmp = Evaluator(s, Set)) > top) {
            top = tmp;
        }
    } return top;
};

exports.Argmax = function (Set, Evaluator) {
    var s   = 0
      , tmp = 0
      , top = 0
      , arg = undefined;
    for (s; s < Set.length; s++) {
        if ((tmp = Evaluator(s)) > top) {
            top = tmp;
            arg = s;
        }
    } return arg;
};

exports.Sum = function (Set, Evaluator) {
    var s   = 0
      , sum = 0;
    for (s; s < Set.length; s++) {
        sum += Evaluator(s);
    } return sum;
};

exports.Product = function (Set, Evaluator) {
    var s   = 0
      , prd = 1;
    for (s; s < Set.length; s++) {
        prd *= Evaluator(s);
    } return prd;
};
