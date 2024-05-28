const express = require("express");                 //llamado al framework
const router = express.Router();                    //llamado al manejador de rutas de express

const salaSchema = require("../model_schema/salas_computo"); //llamado al esquema en los modelos

//Ingresar una Nueva sala de computo a la DB (R de Register en el CRUP)
router.post("/salas_computo/agregar", (req, res) => {  /*peticion post que toma una ruta y una funcion flecha*/

    const sala = salaSchema(req.body); /*crea una constante con el esquema de la sala de computo como body de la peticion*/
    sala      /*usando esta constante realice*/
        .save()                                         //guardar el nuevo documento en la coleccion de la base de datos
        .then((data) => res.json(data))                 //usando la variable data imprima la informacion de data en formato json
        .catch((error) => res.json({ message: error }));//si sale error, atrapelo 
});

//Consulte todos los documentos de la colección  (C del Consult CRUD)
router.get("/salas_computo/ver", (req, res) => {   //petición de tipo get

    salaSchema          /*con el esquema que disponemos*/
        .find()                                      /* trigo todos los documentos en la colección que coincidan con la ruta */
        .then((data) => res.json(data))                  // luego muetrelos
        .catch((error) => res.json({ message: error })); //y que atrape un posible error
});

//Consulte un documento de la colección cuyo id sea el que le otorguemos (C del Consult CRUD)
router.get("/salas_computo/ver/:id", (req, res) => {

    const { id } = req.params;
    salaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un animal por su id
router.put("/salas_computo/actualizar/:id", (req, res) => {

    const { id } = req.params;
    const { codigo, numEquipós, disponible, responsables, tiempo_SinBloquear, energiaUsada_Wh, detalles_TenerEnCuenta } = req.body;

    salaSchema
        .updateOne({ _id: id }, {
            $set: { codigo, numEquipós, disponible, responsables, tiempo_SinBloquear, energiaUsada_Wh, detalles_TenerEnCuenta }
        })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

//borrado del CRUD (D de Delete)
router.delete("/salas_computo/borrar/:id", (req, res) => {

    const { id } = req.params;
    salaSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router; 