const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.get('/api/mensajes', (req, res)=>{
    console.log('HTTP Get');

    res.json({msg: 'Funciona'})
})

app.get('/api/mensajes-query-params', ( req, res ) => {
    console.log('Get query params');

    if(Object.entries(req.query).length > 0) {
        res.json({
            res: 'Get con Query params',
            query: req.query
    })
    }else{
        res.json({
            result: 'No params'
        })
    }

})

app.get('/api/mensajes/:id', ( req, res ) => {
    res.json({
        result: 'Parametro buscado',
        pathParams: req.params
    })
})

app.post('/api/mensajes', ( req, res ) => {
    res.json(req.body)
    //res.json({mensaje: 'Informacion enviada'})
})

app.listen(PORT, ( ) => {
    console.log('Server creado');
})