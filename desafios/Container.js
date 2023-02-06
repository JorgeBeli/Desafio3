const ERROR = 'Producto no encontrado'

class Container {
    constructor( ) {
        this.products = []
    }

    create( obj ) {
        let id;
        this.products.length === 0 ? id = 1 : id=this.products[this.products.length - 1].id + 1
        const newObj = {...obj, id}
        this.products.push(newObj)
        return newObj
    }

    getAll() {
        return this.products
    }

    getById( id ) {
        const findId = this.products.find(obj => obj.id === parseInt(id))
        if(!findId){
            return null
        }
        return findId
    }

    updateById( id, obj ) {
        const findObj = this.products.find((product) => product.id === parseInt(id))
        if(findObj){
            const filteredProducts = this.products.filter((product) => product.id !== parseInt(id))
            const newObj = { ...obj, id }
            this.products = [...filteredProducts, newObj]
            return newObj
        }
        return ERROR
    }

    deleteById( id ) {
        const findObj = this.products.find((product) => product.id === parseInt(id))
        if(findObj){
            const filteredProducts = this.products.filter((product) => product.id !== parseInt(id))
            this.products = filteredProducts
            return this.products
        }
    }
}

module.exports = Container