const BaseModule = require('./../../../BaseModule');

class vpnConn extends BaseModule{
  
    constructor(){ 
        super()
    }

    init(){
        console.log('vpnConn init method should add a component to base nodejs server project')
    }
}

module.exports = new vpnConn();
