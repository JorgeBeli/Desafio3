const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

const palabras = ['hola', 'como', 'estas', '?']
const frase = 'hola como estas'

app.get('/api/frase', ( req, res ) => {

    res.json({
        frase: frase
    })
})

app.get('/api/frase/:pos', ( req, res ) => {

    const { pos } = req.params

    res.json({ letra: frase[parseInt(pos)-1] })
})

app.post('/api/frase', ( req, res ) => {

    const { palabra } = req.body
    palabras.push( palabra )

    res.json({
        msg: palabras
    })
})

app.post('/api/frase/:pos', (req, res) => {

    const { palabra } = req.body
    const { pos } = req.params

    const palabraAnterior = palabras[parseInt(pos) - 1]
    palabras[parseInt(pos) - 1] = palabra

    res.json({
        msg: palabras
    })
})

app.delete('/api/palabras/:id', ( req, res ) => {
    const { id } = req.params
    const palabra = palabras.splice(parseInt(id)-1, 1) 

    res.send({
        palabra: palabra
    })
})

app.listen(PORT, ( ) => {
    console.log('Server creado');
})