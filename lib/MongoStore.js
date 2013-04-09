var MongoClient = require('mongodb').MongoClient;

exports.Address     = 'mongodb://localhost:27017/condor':
exports.SystemJS    = 'system.js'
exports.Features    = 'system.js'
exports.Database    = undefined;
exports.Collection  = undefined;

exports.Connect = function (Callback) {
    MongoClient.connect(exports.Address, function (Err, Database) {
        if (Err) {
            console.log('Failed to connect to MongoDB', exports.Address);
        } else {
            Callback(exports.Database = Database);
        }
    });
};

exports.CollectionWrapper = function (cName, Database) {
    Database.collection(cName, function (Err, Collection) {
        if (Err) {
            console.log('Failed to enter collection', cName);
        } else {
            Callback(exports.Database, exports.Collection = Collection);
        }
    });
};

exports.Do = function (cName, Callback) {
    if (!exports.Database) {
        exports.Connect(function (Database) {
            exports.CollectionWrapper(cName, Database);
        });
    } else {
        CollectionWrapper(cName, exports.Database);
    }
};
