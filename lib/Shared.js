var Standard    = require('./Standard.js')
  , MongoStore  = require('./MongoStore.js');

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Labels              = [];
exports.Features            = [];
exports.FeatureFunctions    = [];
exports.Sequence            = undefined;

exports.PsiESF = function () {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight 
             * exports.FeatureFunctions[exports.Features[wIndex].FuncID].apply(exports, exports.Features[wIndex].Args);
    }));
};

exports.SaveFunction = function () {
    MongoStore.Do('Features', function (Database, Collection) {
        
    });
};

exports.LoadFeatures = function (Callback) {
    var tmp     = true;
    MongoStore.Load(MongoStore.SystemJS, function (Item) {
        exports.FeatureFunctions[Item._id] = Item.value
    }, function () {
        if (tmp = !tmp)
            Callback();
    });
    MongoStore.Load(MongoStore.Features, function (Item) {
        exports.Features.push(Item.value);
    }, function () {
        if (tmp = !tmp)
            Callback();
    });
};
