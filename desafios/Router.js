const express = require('express')
const Container = require('./Container')

const app = express()

app.use(express.json())

const router = express.Router()
const container = new Container()

router.get('/', ( req, res ) => {
    const product = container.getAll()
    res.send(product)
})

router.get('/:id', ( req, res ) => {
    const id = req.params.id
    const product = container.getById( id )
    res.send(product)
})

router.post('/', ( req, res ) => {
    const obj = req.body
    const newObj = container.create( obj )
    res.send( newObj )
})

router.put('/:id', ( req, res ) => {
    const id = req.params.id
    const obj = req.body
    const updatedProduct = container.updateById(parseInt(id), obj)
    res.send(updatedProduct)
})

router.delete('/:id', ( req, res ) => {
    const id = req.params.id
    container.deleteById( id )
    res.send('Producto eliminado')
})

module.exports = router