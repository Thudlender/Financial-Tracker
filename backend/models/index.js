const sequilize = require("./db");
const Sequilize = require("sequelize");
const Financial = require("./financial.model")

const db = {};
db.Sequilize = Sequilize;
db.sequilize = sequilize;
db.Financial = Financial;

module.exports = db