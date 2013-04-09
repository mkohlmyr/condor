var Standard    = require('./Standard.js')
  , MongoStore  = require('./MongoStore.js');

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Labels              = [];
exports.Features            = [];
exports.FeatureFunctions    = [];
exports.Ready               = undefined;
exports.Ready               = undefined;
exports.Ready               = undefined;
exports.Sequence            = undefined;

exports.PsiESF = function (From, To, Index) {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight 
             * exports.Features[wIndex].Func(From, To, Index);
    }));
};

exports.Save = function () {
    MongoStore.Do('Features', function (Database, Collection) {
        
    });
};

exports.LoadFeatures = function () {
    var tmp         = false;
    exports.Ready   = false;
    // REPLACE THE "READY SYSTEM" WITH SIMPLY SENDING IN A CALLBACK..
    MongoStore.Do(MongoStore.SystemJS, function (Database, Collection) {
        var Stream = Collection.find().stream();
            Stream.on('data', function (Item) {
                FeatureFunctions[Item._id] = Item.value;
            });
            Stream.on('end', function () {
                if (!tmp) {
                    tmp = true;
                } else {
                    exports.Ready = true;
                }
            });
    });
    // STREAM THE ACTUAL FEATUREDATA, ALSO FIX SO THAT READY IS ONLY TRUE WHEN BOTH ARE COMPLETE
    MongoStore.Do(MongoStore.Features, function (Database, Collection) {
        var Stream = Collection.find().stream();
            Stream.on('data', function (Item) {
                Features.push(Item.value);
            });
            Stream.on('end', function () {
                if (!tmp) {
                    tmp = true;
                } else {
                    exports.Ready = true;
                }
            });
    });
};
