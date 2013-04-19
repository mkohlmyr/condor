var Standard    = require('./Standard.js')
  , MongoStore  = require('./MongoStore.js');

exports.Globals     = {
    BEGIN   : '[Begin]'
  , END     : '[End]'
};

exports.Labels              = [];
exports.Features            = [];
exports.FeatureFunctions    = {};
exports.Sequence            = undefined;

exports.PsiESF = function (From, To, kIndex) {
    return Math.exp(Standard.Sum(exports.Features, function (wIndex) {
        return exports.Features[wIndex].Weight 
             * exports.FeatureFunctions[exports.Features[wIndex].FuncID].apply(exports, exports.Features[wIndex].Args.concat(From, To, kIndex));
    }));
};

exports.LoadFeatures = function (Callback) {
    var tmp     = true
      , bkt     = undefined;
    MongoStore.Load(MongoStore.Functions, function (Item) {
        exports.FeatureFunctions[Item._id] = eval('bkt = ' + Item.value.code);
    }, function () {
        if (tmp = !tmp)
            Callback();
    });
    MongoStore.Load(MongoStore.Features, function (Item) {
        Item.value._id = Item._id;
        exports.Features.push(Item.value);
    }, function () {
        if (tmp = !tmp)
            Callback();
    });
};

exports.SaveFunction = function (DataSet, Callback) {
    var dIndex  = 0
      , tmpa    = undefined
      , tmpb    = undefined;
    if (!Array.isArray(DataSet)) DataSet = [DataSet];
    if (!DataSet[0]._id) {
        for (dIndex; dIndex < DataSet.length; dIndex++) {
            tmpa = DataSet[dIndex];
            tmpb = tmpa.name;
            DataSet[dIndex] = {
                _id     : tmpb
              , value   : tmpa
            };
        }
    }
    MongoStore.Save(MongoStore.Functions, DataSet, function (Err, Result) {
        if (Err) {
            console.log('Could not save new featurefunction(s)');
        } else {
            console.log('Succesfully saved new featurefunction(s)');
            if (Callback) 
                Callback();
        }
    });
};

/*Untested, entirely likely it will have scope issues, might just scrap this aspect as it will take more work than its worth... */
exports.UpdateWeights = function (cName, FeatureSet, Callback) {
    exports.Do(cName, function (Database, Collection) {
        Collection.update({$where:function () {
            return FeatureSet[this._id] !== undefined;
        }}, {$set:{Weight:FeatureSet[this._id]}});
    });
};
