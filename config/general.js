// CARPETA DEL API

// const SERVIDOR = '/centralbus_backend'
const SERVIDOR = ''
const PORT = 4002

/* const host = 'www.ejdevelop.com'
const user = 'ejdevelo_centralbus'
const password = '*centralbus*'
const database = 'ejdevelo_centralbus_backend' */

const host = 'localhost'
const user = 'postgres'
const password = '123456'
const database = 'censo'

const portdb = 5432

module.exports = {
    host,
    user,
    password,
    database,
    portdb,
    SERVIDOR,
    PORT
}