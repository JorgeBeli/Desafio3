const express = require('express')
const router = require('./Router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/public' ))

const PORT = 8080

app.use('/api/productos', router)

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
})

server.on('error', ( err ) => {
    console.log(`Error corriendo el servidor en ${PORT}`);
})