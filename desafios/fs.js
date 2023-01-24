const fs = require('fs').promises

class Contenedor {
    constructor ( path ) {
        this.path = path
    }

    async save( obj ) {
        try{
            const read= await fs.readFile(this.path,"utf-8");
            const data= JSON.parse(read)
            let id;
            data.length === 0 ? (id = 1) : (id=data[data.length -1].id + 1)
            const newProduct = {...obj, id}
            data.push(newProduct)
            await fs.writeFile(this.path, JSON.stringify(data,null, 2),"utf-8")
            return newProduct.id;
        }catch(e){
            console.log(e);
        }

    }

    async getAll(){
        const read = await fs.readFile( this.path, 'utf-8' )
        return JSON.parse( read )
    }

    async getById( id ) {
        try{
            const read= await fs.readFile(this.path,"utf-8");
            const data= JSON.parse(read)
            const findId = data.find(obj => obj.id === id)
            if(!findId){
                return null
            }
            return findId
        }catch(e){
            console.log(e)
        }
    }

    async deleteAll(){
        await fs.writeFile(this.path,JSON.stringify([]),'utf-8')
    }

    async deleteById( id ){
        try{
            const read= await fs.readFile(this.path,"utf-8");
            const data= JSON.parse(read)
            const findId = data.find(obj => obj.id === id)
            if(!findId){
                return null
            }
            data.splice(findId.id-1,findId.id)
            return await fs.writeFile(this.path,JSON.stringify(data),'utf-8')
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = Contenedor