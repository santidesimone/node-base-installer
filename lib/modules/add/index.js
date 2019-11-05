const modules = {
    tokenCheck: require('./modules/tokenCheck/index'),
    accessPoint: require('./modules/accessPoint/index'),
    vpnConn: require('./modules/vpnConn/index'),
    dbInterface: require('./modules/dbInterface/index')
}

class Add {
  
    constructor(){
        const self = this;
    }

    add(pluginName) {
        if(Object.keys(modules).includes(pluginName)){
            modules[pluginName].init()
        }
        else{
            console.log('please provide a valid pluginName:');
            console.log(Object.keys(modules))
        }    
    };
}

module.exports = new Add();
