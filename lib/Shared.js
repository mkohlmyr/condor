var Standard    = require('./Standard.js')
  , MongoStore  = require('./MongoStore.js');

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Labels      = [];
exports.Features    = [];
exports.Sequence    = undefined;

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

exports.Load = function () {
    MongoStore.Do('Features', function (Database, Collection) {
        
    });
};

db.collection('test', function(err, collection) {});
