var Standard    = require('./Standard.js')
  , MongoStore  = require('./MongoStore.js')
  , Shared          = require('./Shared.js')
  , Common          = require('./dictionaries/Common.js')
  , Capitalization  = require('./dictionaries/Capitalization.js')
  , Knowlege        = require('./dictionaries/Knowlege.js')
  , fs          = require('fs');

exports.Globals     = {
    BEGIN   : '[BGN]'
  , END     : '[END]'
};

exports.ENAMEX      = [
    '[FRN]', '[PUQ]', '[OUQ]'
  , '[LUQ]', '[PST]', '[OST]'
  , '[LST]', '[PMD]', '[OMD]'
  , '[LMD]', '[PED]', '[OED]'
  , '[LED]'
];

exports.Labels              = [];
exports.Features            = [];
exports.FeatureFunctions    = {};
exports.Sequence            = undefined;

exports.Configure = function (Labels, Features) {
    exports.Labels      = Labels;
    exports.Features    = Features;
};

exports.PsiESF = function (From, To, kIndex) {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight 
             * exports.FeatureFunctions[exports.Features[wIndex].FuncID].apply(exports, exports.Features[wIndex].Args.concat(From, To, kIndex));
    }));
};

exports.SaveFunctions = function (Functions, Callback) {
    var dIndex  = 0
      , tmp     = undefined
      , bkt     = undefined
      , key     = undefined
      , set     = [];
    for (key in Functions) {
        tmp = {};
        tmp._id = key;
        tmp.value = Functions[key];
        set.push(tmp);
    } MongoStore.Save(MongoStore.Functions, set, function (Err, Result) {
        if (Err) {
            console.log('Could not save new function(s)');
        } else {
            console.log('Succesfully saved new function(s)');
            if (Callback) 
                Callback();
        }
    });
};

exports.SaveFeatures = function (Features, Callback) {
    MongoStore.Save(MongoStore.Features, Features, function (Err, Result) {
        if (Err) {
            console.log('Could not save new feature(s)');
        } else {
            console.log('Succesfully saved new feature(s)');
            if (Callback)
                Callback();
        }
    });
};

exports.ReadFile = function (filepath) {
    return fs.readFileSync(filepath, 'utf-8');
};
