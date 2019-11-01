const BaseModule = require('./../../../BaseModule');

class DBInterface extends BaseModule{
  
    constructor(){ 
        super()
    }

    init(){
        console.log('DBInterface init method should add a component that standarices howt database CRUD operations are done')
    }
}

module.exports = new DBInterface();
