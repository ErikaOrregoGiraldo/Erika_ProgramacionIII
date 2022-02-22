//Instalamos el framework express para manejar los request HTTP y esyablecer el puertoa usar
const express = require('express')
//La libreria mongoose nos permite establecer conexión con BDMONGOOSE
const mongoose = require('mongoose')
const userRoute = require("./routes/user_routes")
const productRoute = require("./routes/products_routes")
//process.env es una variable global para representar el estado de las variables de ambiente
const port = process.env.PORT || 3000
const execute_app = express()
require('dotenv').config()

//Conexión al puerto 3000
execute_app.listen(port, () => console.log('Listening the port', port))
//Primer request para acceder a http://localhost:3000
execute_app.get('/', (req,res) => res.send('Programación III'))

//Conexión a la base de datos mongoDB
mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connect with mongodb'))
        .catch((error) => console.error(error))

//Middleware
execute_app.use(express.json())
execute_app.use('/api', userRoute)
execute_app.use('/api', productRoute)