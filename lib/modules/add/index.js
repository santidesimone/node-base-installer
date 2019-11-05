const BaseModule = require('./../BaseModule');
const modules = {
    tokencheck: require('./modules/tokenCheck/index'),
    accesspoint: require('./modules/accessPoint/index'),
    vpnconn: require('./modules/vpnConn/index'),
    dbinterface: require('./modules/dbInterface/index'),
}

class Add extends BaseModule{
    constructor(){
        super()
    }

    init(...args) {
        this.pluginName = (args[0]!=undefined)?args[0].toLowerCase():'';
        if(Object.keys(modules).includes(this.pluginName)){
            modules[this.pluginName].init()
        }
        else{
            console.log()
            console.log('please provide a valid pluginName:')
            console.log()
            console.log('xdome add <PUGIN_NAME>')
            console.log()
            Object.keys(modules).forEach(function(itm, idx){
                console.log('- ' + itm)
            })
            console.log()
        }    
    };
}

module.exports = new Add();
