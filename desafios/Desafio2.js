const Contenedor = require('./fs');
const products = new Contenedor('./desafios/products.json')

async function ejecutar( ) {
    const obj={
        name: ' Empanada de  J y Q ',
        price: 180,
        thumbnail: 'https://dummyimage.com/600x400/000/fff'
    }
    const obj2={
        name: ' Empanada de Pollo ',
        price: 190,
        thumbnail: 'https://dummyimage.com/600x400/000/fff'
    }
    const obj3={
        name: ' Pizza ',
        price: 180,
        thumbnail: 'https://dummyimage.com/600x400/000/fff'
    }

    await products.save(obj)
    await products.save(obj2)
    await products.getAll()
    await products.getById(1)
    await products.deleteById(1)
    await products.deleteAll()
}

ejecutar()