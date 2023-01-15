const http = require( 'http' )
const moment = require('moment')

const server = http.createServer((req, res) => {
    const currentHour = moment().get('hour') 
    let message = ''    

    if(currentHour >= 6 && currentHour <= 12){
        message = 'Buenos Dias'
    }
    if(currentHour >= 13 && currentHour <= 19){
        message = 'Buenas Tardes'
    }
    if(currentHour >= 20 && currentHour <= 5){
        message = 'Buenas Noches'
    }

    res.end(`${message}`)
})

const connectedServer = server.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto: ${ connectedServer.address().port }`)
})