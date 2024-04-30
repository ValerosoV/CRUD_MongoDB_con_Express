const express = require('express')
const app = express()
const port = 3000

app.get('/EsoDictador',(req,res)=>{
    res.send('Al alto mando aleman le gusta que desarrolle tecnologias')
})



app.listen(port, () => {
    console.log('La aplicación se esta ejecutando por el puerto'+ port)
    }
)
