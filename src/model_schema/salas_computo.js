const mongoose = require("mongoose"); /* gestor de rutas */

const salaSchema = mongoose.Schema({
        variable1:{    /* nombre variable */
            type: Int, /* tipo variable */
            required: true
        },
        variable2:{
            type: Int,
            required: true
        }
    }
);


module.exports = mongoose.model("sala_computo", salaSchema); /* darle a sala_computo en route el acceso al esquema*/