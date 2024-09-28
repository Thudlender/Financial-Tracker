require("dotenv").config();
console.log(process.env.HOST,
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE,
)
module.exports = { 
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
