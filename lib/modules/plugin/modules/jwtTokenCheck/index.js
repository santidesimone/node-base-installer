const BaseModule = require('./../../../BaseModule');

class JwtTokenCheck extends BaseModule {
  
    constructor(){ 
        super()
    }

    init(){
        console.log('JwtTokenCheck init method should add a component to base nodejs server project')
    }

}

module.exports = new JwtTokenCheck();
