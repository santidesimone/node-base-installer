const BaseModule = require('./../../../BaseModule');

class DBInterface extends BaseModule{
  
    constructor(){ 
        super()
    }

    init(){
        console.log('DBInterface init method should add a component to base nodejs server project')
    }
}

module.exports = new DBInterface();
