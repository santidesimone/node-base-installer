class Main {
  
    constructor(){

        // /**
        //  * Creates a base nodejs server template by git-cloning a defined repository
        //  * 
        //  */        
        this.create = require('./modules/create/index').create;

        // /**
        //  * Plugins a module to an already created project
        //  * 
        //  * @param {pluginName} String plugin name to be added
        //  */
        this.plugin = require('./modules/plugin/index').plugin;

    }
}

module.exports = Main;


