class Main {
  
    constructor(){

        // /**
        //  * Creates a base nodejs server template by git-cloning a defined repository
        //  * 
        //  * @param {projectName} String a name for the project to be added
        //  */        
        this.create = require('./modules/create/index').create;

        // /**
        //  * Plugins a module to an already created project
        //  * 
        //  * @param {pluginName} String the name of the plugin to be added
        //  */
        this.plugin = require('./modules/plugin/index').plugin;

    }
}

module.exports = Main;


