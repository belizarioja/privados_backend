const { query } = require("express");
const conexion = require("../config/conexion")
// const crypto = require('crypto')

module.exports = {
    async login (usuario, clave) {
        // const clavehash = crypto.createHash('md5').update(clave).digest("hex");
        const sql = "select a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa ";
        const from = " from t_usuarios a, t_roles b ";
        const where = " where a.co_rol = b.co_rol and a.tx_usuario = '" + usuario + "' and a.tx_clave = '" + clave + "'";

        // console.log(sql);
        const resultados = await conexion.query(sql + from + where)
        // console.log(resultados);
        return resultados.rows;
    },
    async listarusuarios () {
        // const clavehash = crypto.createHash('md5').update(clave).digest("hex");
        const sql = "select a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa from t_usuarios a, t_roles b where a.co_rol = b.co_rol ";
        // console.log(sql);
        const resultados = await conexion.query(sql)
        // console.log(resultados);
        return resultados.rows;
    }
}