var Q = require('q'),
    Parent = require('heinzelmannchen-generator'),
    pg2json = require('pg2json'),
    connection = require('pg2json/lib/connection'),
    tables = require('pg2json/lib/tables'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
    var q = Q.defer();
    connection.connect(this.config)
        .then(function() {
            return tables.get();
        })
        .then(function(tables) {
            q.resolve(tables);
        })
        .fail(function(error) {
            q.reject(error);
        });
    return q.promise;
};

Generator.prototype.explain = function() {
    var text = ['[{',
        '\ttable_name: "a-table-name",',
        '\ttable_schema: "public",',
        '\tcolumns: [{',
        '\t\tcolumn_name: "column_name",',
        '\t\tdata_type: "int|string|...",',
        '\t\tcolumn_default: "Foo",',
        '\t\tis_nullable: true,',
        '\t\tcharacter_maximum_length: 7,',
        '\t\tnumeric_precision. 3',
        '\t} ...]',
        '} ...]'
    ];
    return text.join('\n');
};

Generator.prototype.help = function() {};

module.exports = Generator;
