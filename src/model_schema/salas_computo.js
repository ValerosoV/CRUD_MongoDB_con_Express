const mongoose = require("mongoose"); /* gestor de rutas */

const salaSchema = mongoose.Schema({
        salaID:{            /* nombre variable */
            type: Int,      /* tipo variable */
            required: true
        },
        codigo:{
            type: Int,
            required: true
        },
        numEquipos:{
            type: Int,
            required: true
        },
        disponible:{
            type: boolean,
            required: true
        },
        responsables:{
            type: String,
            required: true
        },        
        energíaUsada_Wh:{
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