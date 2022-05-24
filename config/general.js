// CARPETA DEL API

// const SERVIDOR = '/privados_backend'
const SERVIDOR = ''
const PORT = 4004

/* const host = 'localhost'
const user = 'hatogril_privado'
const password = '*privados*'
const database = 'hatogril_privados' */

const host = 'localhost'
const user = 'postgres'
const password = '123456'
const database = 'hatogril_privados'

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