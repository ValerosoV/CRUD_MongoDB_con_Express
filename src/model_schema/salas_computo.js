const mongoose = require("mongoose"); /* gestor de rutas */

const salaSchema = mongoose.Schema({
        codigo:{
            type: Number,
            required: true
        },
        numEquipos:{
            type: Number,
            required: true
        },
        disponible:{
            type: String,
            required: true
        },
        responsables:{
            type: String,
            required: true
        },        
        energiaUsada_Wh:{
            type: Number,
            required: true
        },
        tiempo_SinBloquear:{
            type: Number,
            required: true
        },
        detalles_TenerEnCuenta:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("sala_computo", salaSchema); /* darle a sala_computo en route el acceso al esquema*/