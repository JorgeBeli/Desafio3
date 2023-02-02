const express = require('express')
const { Router } = express

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/public' ))

//Arrays

const personas = [{nombre: 'Juan', apellido: 'Fernandez', edad: 35},{nombre:'Alberto', apellido: 'Sanchez', edad: 45}]

const mascotas = [{nombre: 'Globo', raza: 'Bulldog', edad: 5},{nombre:'Alberto', raza: 'Doberman', edad: 7}]

//Declarando routers

const routerPersonas = new Router()
const routerMascotas = new Router()
const routerMiddleware = new Router()

//Personas

routerPersonas.get('/', ( req, res ) => {
    res.json({
        personas: personas
    })
})

routerPersonas.post('/', ( req, res ) => {
    personas.push(req.body)

    res.json({
        personas: personas
    })
})

//Mascotas

routerMascotas.get('/', ( req, res ) => {
    res.json({
        mascotas: mascotas
    })
})

routerMascotas.post('/', ( req, res ) => {
    mascotas.push(req.body)

    res.json({
        mascotas: mascotas
    })
})

//Rutas principales

app.use('/personas', routerPersonas)
app.use('/mascotas', routerMascotas)

//Puerto del servidor

app.listen(PORT, () => {
    console.log('Server creado en puerto 3000');
})