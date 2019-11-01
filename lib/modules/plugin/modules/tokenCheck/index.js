const BaseModule = require('./../../../BaseModule');

class tokenCheck extends BaseModule {
  
    constructor(){ 
        super()
    }

    init(){
        console.log('tokenCheck init method should add a component to base nodejs server project')
    }

}

module.exports = new tokenCheck();
