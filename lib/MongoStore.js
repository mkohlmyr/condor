var MongoClient = require('mongodb').MongoClient;

exports.Address     = 'mongodb://localhost:27017/condor';
exports.Functions   = 'Functions';
exports.Features    = 'Features';
exports.Database    = undefined;
exports.Collection  = undefined;

exports.Connect = function (Callback) {
    MongoClient.connect(exports.Address, function (Err, Database) {
        if (Err) {
            console.log('Failed to connect to MongoDB', exports.Address);
        } else {
            console.log('Established MongoDB connection');
            Callback(exports.Database = Database);
        }
    });
};

exports.CollectionWrapper = function (cName, Database, Callback) {
    Database.collection(cName, function (Err, Collection) {
        if (Err) {
            console.log('Failed to access collection', cName);
        } else {
            console.log('Accessed collection', cName);
            Callback(exports.Database, exports.Collection = Collection);
        }
    });
};

exports.Do = function (cName, Callback) {
    if (!exports.Database) {
        console.log('No pre-existing MongoDB connection');
        exports.Connect(function (Database) {
            exports.CollectionWrapper(cName, Database, Callback);
        });
    } else {
        console.log('Using existing MongoDB connection for', exports.Address);
        exports.CollectionWrapper(cName, exports.Database, Callback);
    }
};

exports.Load = function (cName, Chunk, End) {
    exports.Do(cName, function (Database, Collection) {
        var Stream = Collection.find().stream();
            Stream.on('data', Chunk);
            Stream.on('end', End);
    });
};

exports.Update = function (cName, id, kvp, Callback) {
    var tmp         = {$set : undefined}
      , bkt         = {_id  : undefined};
    tmp['$set']     = kvp
    bkt._id         = id
    var opts        = {}
      , args        = [bkt, tmp, opts];
    if (Callback) {
        opts.w = 1;
        args.push(Callback);
    } exports.Do(cName, function (Database, Collection) {
        Collection.update.apply(Collection, args);
    });
};

exports.Save = function (cName, DataSet, Callback) {
    var opts = {serializeFunctions:true}
      , args = [DataSet, opts];
    if (Callback) {
        opts.w = 1;
        args.push(Callback);
    } exports.Do(cName, function (Database, Collection) {
        Collection.insert.apply(Collection, args);
    });
};
