const express = require('express')
const moment = require('moment')
const Contenedor = require('./fs');
const products = new Contenedor('./desafios/products.json')

const app = express()

const PORT = 3000

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${ server.address().port }`)
})

app.get('/', ( req, res ) => {
    res.send(`<h1 style='color: blue'>Bienvenidos al servidor Express</h1>`)
})

app.get('/productos', async ( req, res ) => {
    const productos = await products.getAll()
    res.send({Productos: productos})
})

app.get('/productoRandom', async ( req, res ) => {
    const productos = await products.getAll()
    const random = Math.floor(Math.random() * productos.length)
    res.send({ProductoRandom: productos[random]})
})

server.on('error',( error ) => {
    console.log(`Error: ${ error }`)
})