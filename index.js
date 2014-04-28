var Q = require('q'),
    Parent = require('heinzelmannchen-generator'),
    pg2json = require('pg2json'),
    connection = require('pg2json/lib/connection'),
    tables = require('pg2json/lib/tables'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
    return connection.connect(this.config)
        .then(function() {
            var tableNames = null;
            if (this.filters) {
                tableNames = this.filters.tables;
            }
            return tables.get(tableNames);
        })
        .then(function(tables) {
            return tables;
        });
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
