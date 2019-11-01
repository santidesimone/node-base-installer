const BaseModule = require('./../BaseModule.js');

class Plugin extends BaseModule{
  
    constructor(){
        super();
        const self = this;
    }

    plugin(pluginName) {
        super.pass()
    };
}

module.exports = new Plugin();
