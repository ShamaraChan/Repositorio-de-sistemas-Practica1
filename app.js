const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017'

mongoose.connect (url_bd)
.then(() => {
    console.log('Conexion exitosa a la base de datos')
})
.catch((err) => {
    console.log('No hubo conexion a la base de datos')
})

const alumnos_Schema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        numtel:{
            type:Number
        }

    }

)

const alumnos = new mongoose.model('Tre', alumnos_Schema)

alumnos.create(
    {
        name: "Shamara",
        apepat: "Vazquez",
        apemat: "Ramirez",
        numtel: 8441821610
    }
)
