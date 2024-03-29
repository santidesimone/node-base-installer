const BaseModule = require('./../BaseModule');

class Help extends BaseModule{
    constructor(){
        super();
    }

    init(...args) {
        let usage = 'xdome [version] [help] [info] [log] [update] [<args>]'
        console.log();
        console.log(usage)
        console.log();

        let commonCommandsTitle = 'These are common xdome commands:'
        console.log(commonCommandsTitle)
        console.log();

        let createCommand1 = 'create a base NodeJS server'
        let createCommand2 = 
        '      create    Clones server repository template into a new directory'
        console.log(createCommand1)
        console.log(createCommand2)
        console.log();

        let addCommand1 = 'start working with your server'
        let addCommand2 = 
        '      add    Adds standarized functionality to the server'
        console.log(addCommand1)
        console.log(addCommand2)
        console.log();

        // for (let i=0; i<args.length; i++) 
        //     console.log(args[i]);

    }

}

module.exports = new Help();
