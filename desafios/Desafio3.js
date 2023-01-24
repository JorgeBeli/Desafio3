const express = require('express')
const moment = require('moment')

const app = express()

const PORT = 3000

let visitas = 0 

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${ server.address().port }`)
})

app.get('/', ( req, res ) => {
    res.send(`<h1 style='color: blue'>Bienvenidos al servidor Express</h1>`)
})

app.get('/visitas', ( req, res ) => {
    visitas++
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get('fyh', ( req, res ) => {
    const fecha = moment().get('date')
    const hour = moment().get('hour')

    res.send(`Es el dia: ${fecha} y son las: ${hour}`)
})

server.on('error',( error ) => {
    console.log(`Error: ${ error }`)
})