const { Pool } = require("pg")
const config = require("./general")

// Coloca aquí tus credenciales
/* const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOSTDB,
  database: process.env.DATABASE,
  password: process.env.PASSWDB,
  port: process.env.PORTDB,
}) */

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.portdb,
})

pool.connect(function (err) {
  if (err) {
    console.error(err)
    return
  } else {
    console.log('BD app privados conectada')
  }
})
module.exports = pool