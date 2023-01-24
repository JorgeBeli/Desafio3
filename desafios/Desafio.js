const fs = require('fs')

let id = 0

let obj = {
    title: 'Buzo',
    price : 4500,
    thumbnail: 'https://dummyimage.com/400x400/474747/3b3b3b' 
}

const processFile = ( filename ) => {
    fs.writeFileSync( filename, JSON.stringify( [] ) )
    const fileInformation = JSON.parse( fs.readFileSync( filename, 'utf-8' ) )
    obj = {...obj, id: id+= 1}
    fileInformation.push( obj )    
    fs.writeFileSync( filename, JSON.stringify( obj ) )
}

processFile('prueba.txt')