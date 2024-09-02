const { Sequilize } = require ("sequilize");
const dbConfig = require("../config/db.config");
console.log(dbConfig);

const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig)