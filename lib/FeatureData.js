var Standard        = require('./Standard.js')
  , Shared          = require('./Shared.js')
  , Common          = require('./dictionaries/Common.js')
  , Capitalization  = require('./dictionaries/Capitalization.js')
  , Knowlege        = require('./dictionaries/Knowlege.js');

exports.Feature = function (Weight, FuncID, Args, Index) {
    this.Weight = Weight;
    this.FuncID = FuncID;
    this.Args   = Args;
    this._id    = Index + FuncID;
};

exports.PrefixCache = {};

exports.PrefixToken = function (Token, Length) {
    if (exports.PrefixCache[Token]) {
        if (exports.PrefixCache[Token][Length]) {
            return exports.PrefixCache[Token][Length];
        }
    } else exports.PrefixCache[Token] = {};
    return (exports.PrefixCache[Token][Length] = Token.substring(0, Length));
};

exports.SuffixCache = {};

exports.SuffixToken = function (Token, Length) {
    if (exports.SuffixCache[Token]) {
        if (exports.SuffixCache[Token][Length]) {
            return exports.SuffixCache[Token][Length];
        }
    } else exports.SuffixCache[Token] = {};
    return (exports.SuffixCache[Token][Length] = Token.substring(Token.length - Length));
};

exports.NormalCache = {};

exports.NormalizeToken  = function (Token) {
    if (exports.NormalCache[Token])
        return exports.NormalCache[Token];
    var tIndex = Token.length
      , result = '';
    for (tIndex; tIndex--;) {
        if (Token !== '.') {
            result = Token[tIndex] + result;
        }
    } if (result[result.length - 2] === '\'' && result[result.length - 1] === 's') {
        result = result.substring(0, result.length - 2);
    } else if (result[result.length - 1] === '\'' && result[result.length - 2] === 's') {
        result.result.substring(0, result.length - 1);
    }return (exports.NormalCache[Token] = result.toLowerCase());
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
            Shared.Features.push(new exports.Feature(0.1, Func.name, Env, Shared.Features.length - 1));
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

exports.CapitalizationType = function CapitalizationType (CapFixed, FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex], kIndex))
         ? 1
         : 0;
};

exports.ForeignCapitalization = function ForeignCapitalization (CapFixed, FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To && !Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex])] && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex], kIndex))
         ? 1
         : 0;
};

exports.CapitalizationPostBigram = function CapitalizationPostBigram (CapFixed, ToFixed, From, To, kIndex) {
    return (ToFixed === To && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex], kIndex) && CapFixed === Capitalization.Discern(Shared.Sequence[kIndex + 1], kIndex + 1))
         ? 1
         : 0;
};

exports.TitlePreKnowlege = function TitlePreKnowlege (ToFixed, From, To, kIndex) {
    return (ToFixed === To && Knowlege.Titles[exports.NormalizeToken(Shared.Sequence[kIndex - 1])])
         ? 1
         : 0;
};

exports.TitlePostKnowlege = function TitlePostKnowlege (ToFixed, From, To, kIndex) {
    return (ToFixed === To && !Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex])] && Knowlege.Titles[exports.NormalizeToken(Shared.Sequence[kIndex + 1])])
         ? 1
         : 0;
}

exports.OrgKnowlege = function OrgKnowlege (FromFixed, ToFixed, From, To, kIndex) {
    return (FromFixed === From && ToFixed === To && Knowlege.Organizations[exports.NormalizeToken(Shared.Sequence[kIndex])])
         ? 1
         : 0;
};

exports.Possessive = function Possessive (ToFixed, From, To, kIndex) {
    var tmp = undefined;
    if (ToFixed === To) {
        tmp = Shared.Sequence[kIndex];
        if ((tmp[tmp.length - 2] === '\'' && tmp[tmp.length - 1] === 's')
         || (tmp[tmp.length - 1] === '\'' && tmp[tmp.length - 2] === 's')) {
            return 1;
        }
    } return 0;
};

exports.PossessiveCapitalization = function PossessiveCapitalization (CapFixed, FromFixed, ToFixed, From, To, kIndex) {
    var tmp = undefined;
    if (FromFixed === From && ToFixed === To) {
        tmp = Shared.Sequence[kIndex];
        if ((tmp[tmp.length - 2] === '\'' && tmp[tmp.length - 1] === 's')
         || (tmp[tmp.length - 1] === '\'' && tmp[tmp.length - 2] === 's')) {
            if (CapFixed === Capitalization.Discern(Shared.Sequence[kIndex], kIndex)) {
                return 1;
            }
        }
    } return 0;
};

exports.OrgPostKnowlege = function OrgPostKnowlege (ToFixed, From, To, kIndex) {
    return (ToFixed === To && kIndex < (Shared.Sequence.length - 2)
        && (Knowlege.Organizations[exports.NormalizeToken(Shared.Sequence[kIndex + 1])]
         || (Knowlege.Organizations[exports.NormalizeToken(Shared.Sequence[kIndex + 2])])))
            ? 1
            : 0;
};

exports.LocationPostKnowlege = function LocationPostKnowlege (ToFixed, From, To, kIndex) {
    return (ToFixed === To && Knowlege.Locations[exports.NormalizeToken(Shared.Sequence[kIndex + 1])])
         ? 1
         : 0;
};

exports.LocationPrefix = function LocationPrefix (ToFixed, From, To, kIndex) {
    var rIndex  = 3
      , tmp     = undefined;
    if (ToFixed !== To) {
        return 0;
    } else {
        tmp = exports.NormalizeToken(Shared.Sequence[kIndex]);
        for (rIndex; rIndex <= Knowlege.LPMAX; rIndex++) {
            if (rIndex >= (tmp.length - 1)) {
                break;
            } else if (Knowlege.LocationPrefixes[exports.PrefixToken(tmp, rIndex)]) {
                return 1;
            }
        }
    } return 0;
};

exports.LocationSuffix = function LocationSuffix (ToFixed, From, To, kIndex) {
    var rIndex  = 3
      , tmp     = undefined;
    if (ToFixed !== To) {
        return 0;
    } else {
        tmp = exports.NormalizeToken(Shared.Sequence[kIndex]);
        for (rIndex; rIndex <= Knowlege.LSMAX; rIndex++) {
            if (rIndex >= (tmp.length - 1)) {
                break;
            } else if (Knowlege.LocationSuffixes[exports.SuffixToken(tmp, rIndex)]) {
                return 1;
            }
        }
    } return 0; 
};

exports.PosPostBigram = function PosPostBigram (FstPosFixed, SndPosFixed, FromFixed, ToFixed, From, To, kIndex) {
    var tmp = undefined
      , bkt = undefined;
    if (FromFixed === From && ToFixed === To && kIndex < (Shared.Sequence.length - 2)) {
        if ((tmp = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex + 1])])
         && (bkt = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex + 2])])) {
            return Standard.In(tmp, FstPosFixed)
                && Standard.In(bkt, SndPosFixed)
                 ? 1
                 : 0;
        }
    } return 0;
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
      , rIndex  = 0
      , item    = undefined;
    if (FromFixed === From && ToFixed === To && kIndex < (Shared.Sequence.length - 1)) {
        if ((tmp = Common.Words[exports.NormalizeToken(Shared.Sequence[kIndex - 1])])
         && (Standard.In(tmp, PosFixed))
         && (bkt = exports.NormalizeToken(Shared.Sequence[kIndex + 1]))) {
            for (rIndex; rIndex < SuffixFixed.length; rIndex++) {
                item = SuffixFixed[rIndex];
                if (item.length < bkt.length && exports.SuffixToken(bkt, item.length) === item) {
                    return 1;
                }
            }
        }
    } return 0;
};
