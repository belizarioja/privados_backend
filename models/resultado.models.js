const { query } = require("express");
const conexion = require("../config/conexion")
const moment = require('moment')

module.exports = {
    async guardaresultados (resultados) {
        const fe_resultado = moment().format('YYYY-MM-DD HH:mm:ss')
        for (let i = 0; i < resultados.length; i++) {
            const co_encuesta = resultados[i].co_encuesta
            const co_seccion = resultados[i].co_seccion
            const co_topico = resultados[i].co_topico
            const co_tipo_topico = resultados[i].co_tipo_topico
            const nu_valor = resultados[i].nu_valor
            const tx_valor = resultados[i].tx_valor
            const co_usuario = resultados[i].co_usuario

            const sqlitem = "insert into t_resultados (co_encuesta, co_seccion, co_topico, co_tipo_topico, nu_valor, tx_valor, co_usuario, fe_resultado) "
            const valuesitem = " values ($1, $2, $3, $4, $5, $6, $7, $8)"
            await conexion.query(sqlitem + valuesitem, [co_encuesta, co_seccion, co_topico, co_tipo_topico, nu_valor, tx_valor, co_usuario, fe_resultado])

        }
        return true
    }

}