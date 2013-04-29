exports.Case = function (char) {
    return char === char.toUpperCase()
         ? 1
         : 0;
};

exports.Types = {
    'ALL'           : 1
  , 'ALTERNATING'   : 2
  , 'FIRST'         : 3
  , 'NATURAL'       : 4
  , 'NONE'          : 5
};

exports.aa      = ['aa', exports.Types.ALTERNATING, exports.Types.ALL];
exports.fa      = [exports.Types.ALTERNATING, 'fa', exports.Types.FIRST];
exports.na      = [exports.Types.ALTERNATING, 'na', exports.Types.NONE];
exports.faa     = ['aa', 'fa', exports.Types.FIRST];

exports.Discern = function (Token, kIndex) {
    var StateMachine = function (State, input, index) {
        var nxt = undefined;
        if (input.length > index) {
            nxt = exports.Case(input[index])
                ? State[0]
                : State[1];
            if (!nxt['length']) {
                return nxt;
            } else return StateMachine(exports[nxt], input, index + 1);
        } 
        return State[2];
    };
    var result = StateMachine(['faa', 'na'], Token, 0);
    return (result === exports.Types.FIRST)
         ? ((kIndex === 0) ? exports.Types.NATURAL : exports.Types.FIRST)
         : result;
};
