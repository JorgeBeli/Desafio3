const express = require('express')
const { Router } = express

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/public' ))

const PORT = 3000

const routerPersonas = new Router()

const personas = [{nombre: 'Juan', apellido: 'Fernandez', edad: 35},{nombre:'Alberto', apellido: 'Sanchez', edad: 45}]

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

app.use('/personas', routerPersonas)

app.listen(PORT, ( req, res ) => {
    console.log('Server levantado en puerto 3000');
})