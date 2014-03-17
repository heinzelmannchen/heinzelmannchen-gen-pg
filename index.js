var Q = require('q'),
    Parent = require('heinzelmannchen-generator'),
    pg2json = require('pg2json'),
    connection = require('pg2json/lib/connection'),
    tables = require('pg2json/lib/tables'),
    Generator = Parent.inherit(),
    config;




Generator.prototype.setConfig = function(theConfig) {
    config = theConfig;
};

Generator.prototype.createData = function() {
    var q = Q.defer();
    connection.connect(config)
        .then(tables.get)
        .then(function(tables) {
            q.resolve(tables);
        })
        .fail(function(error) {
            q.reject(error);
        });
    return q.promise;
};

Generator.prototype.explain = function() {};

Generator.prototype.help = function() {};

module.exports = Generator;
