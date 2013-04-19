var Standard        = require('./Standard.js')
  , Shared          = require('./Shared.js')
  , Common          = require('./dictionaries/Common.js')
  , Capitalization  = require('./dictionaries/Capitalization.js');

exports.Feature = function (Weight, FuncID, Args) {
    this.Weight = Weight;
    this.FuncID = FuncID;
    this.Args   = Args;
    this._id;
};

exports.NormalizeToken  = function (token) {
    return token.toLowerCase();
};

exports.Generate = function (Func, Args, Env) {
    var Recurse = function (Args, Env) {
        var DataSet = Args.shift()
          , dIndex  = 0;
        if (DataSet) {
            for (dIndex in DataSet) {
                if (DataSet.hasOwnProperty(dIndex)) {
                    Recurse.call(this, Args.concat(), Env.concat(DataSet[dIndex]));
                }
            }
        } else {
            Shared.Features.push(new exports.Feature(0.1, Func.name, Env));
        }
    };
    Shared.FeatureFunctions[Func.name] = Func;
    Recurse(Args, Env);
};


exports.Transition = function Transition (FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To)
         ? 1 
         : 0;
};

exports.PreVersatility = function PreVersatility (FromFixed, ToFixed, From, To, kIndex) {
    var tmp = undefined;
    if (FromFixed === From && ToFixed === To && (tmp = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex - 1])])) {
        return 1 / tmp.length;
    } return 0;
};

exports.Capitalization = function Capitalization (CapFixed, FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex]))
         ? 1
         : 0;
};

exports.ForeignCapitalization = function ForeignCapitalization (CapFixed, FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To && !Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex])] && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex]))
         ? 1
         : 0;
};

exports.PosPreBigram = function PosPreBigram (FstPosFixed, SndPosFixed, FromFixed, ToFixed, From, To, kIndex) {
    var tmp = undefined
      , bkt = undefined;
    if (FromFixed === From && ToFixed === To && kIndex > 2) {
        if ((tmp = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex - 2])])
         && (bkt = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex - 1])])) {
            return Standard.In(tmp, FstPosFixed)
                && Standard.In(bkt, SndPosFixed)
                 ? 1
                 : 0;
        }
    } return 0;
};

exports.PosPreSuffixNext = function PosPreSuffixNext (PosFixed, SuffixFixed, FromFixed, ToFixed, From, To, kIndex) {
    var tmp     = undefined
      , bkt     = undefined
      , lut     = {}
      , rIndex  = 0
      , item    = undefined;
    if (FromFixed === From && ToFixed === To && kIndex < (Shared.Sequence.length - 1)) {
        if ((tmp = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex - 1])])
         && (Standard.In(tmp, PosFixed))
         && (bkt = exports.NormalizeToken(Shared.Sequence[kIndex + 1]))) {
            for (rIndex; rIndex < SuffixFixed.length; rIndex++) {
                item = SuffixFixed[rIndex];
                if (lut[item.length] || (lut[item.length] = bkt.substring(bkt.length - item.length))) {
                    if (lut[item.length] === item) {
                        return 1;
                    }
                }
            }
        }
    } return 0;
};
