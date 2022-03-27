const bodyParser = require('body-parser');
const pessoas = require('./routePessoas');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas)
}