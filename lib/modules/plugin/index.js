const BaseModule = require('./../BaseModule');

const modules = {
    jwtTokenCheck: require('./modules/jwtTokenCheck/index'),
    restAccessPoint: require('./modules/restAccessPoint/index'),
    vpnConn: require('./modules/vpnConn/index')
}

class Plugin extends BaseModule{
  
    constructor(){
        super();
        const self = this;
    }

    plugin(pluginName) {

        if(Object.keys(modules).includes(pluginName)){
            modules[pluginName].init()
        }
        else{
            console.log('please provide a valid pluginName:');
            console.log(Object.keys(modules))
        }    

    };
}

module.exports = new Plugin();
