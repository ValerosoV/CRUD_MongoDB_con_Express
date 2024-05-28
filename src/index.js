const parser = require("body-parser");            /*esta libreria vino con npm init*/     

const express = require('express');               /*la constante sera hecha usando la libreria back-end express*/
const app = express();                            /*esta constante sera usada como una funcion llamada app*/
const port = 3000;                               /*este es el puerto que usara la api*/

const salasRoutes = require("./routes/sala_computo"); 

const mongoose = require("mongoose");   /*Llama al gestor de rutas mongoose para ser usado*/

require('dotenv').config();            /*solicita la informacion el archivo .env para configurar la conexión*/

app.use(parser.urlencoded({ extended: false }));    //permite leer los datos que vienen en la petición
app.use(parser.json());                             // transforma los datos a formato JSON

//Gestión de las rutas usando el middleware
app.use("/api", salasRoutes);                       //
app.use(express.json());                            //express usara los datos convertidos a json que reciba

//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))    //cuando se logre correctamende muestre el mensaje por consola
    .catch((error) => console.log(error));          //si salta error, atrapelo

//Indicador del puerto usado para la conexión
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
