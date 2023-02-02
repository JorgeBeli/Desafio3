const  express = require('express')
const { Router } = express

const app = express()

const PORT = 3000

function mdl1( req, res, next ) {
    req.miAporte1 = 'Data por mdl1'
    if(req.query.rol !== "admin"){
        res.send('Acceso no autorizado')
    }
    next()
}

const router = new Router

router.get('/middleware', mdl1, ( req, res ) => {
    let miAporte = req.miAporte1
    res.send({ miAporte })
})

app.use('/', router)

app.listen( PORT, () => {
    console.log('Server activo en puerto 3000');
} )