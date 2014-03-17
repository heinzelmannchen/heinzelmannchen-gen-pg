var G = require('../index'),
    g = new G();
g.setConfig({
    'charset': 'utf8',
    'database': 'heinzel',
    'host': '127.0.0.1',
    'password': 'anton',
    'user': 'anton'
});
g.createData().then(function(tables) {
    console.log(tables);
});
