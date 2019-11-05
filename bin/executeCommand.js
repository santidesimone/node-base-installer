#!/usr/bin/env node

const Main = new(require('../lib/index.js'))();

/* Delete the 0 and 1 argument ('/usr/local/bin/node' and '/usr/local/bin/xdome') */
let args = process.argv.splice(process.execArgv.length + 2);

let commands = {
    create: {
        method: 'create', /* server */
    },
    add: {
        method: 'add',  /* plugin <PLUGIN_NAME> */
    },
    version: {
        method: 'version',
    },
    help: {
        method: 'help',
    },
    info: {
        method: 'info',
    },
    log: {
        functionName: 'log',
    },
    update: {
        method: 'update',
    }
};

let commandName = args[0];
let commandIsUndefined = (commandName===undefined)?true:false;
let isValidCommand = Object.keys(commands).includes(commandName);
let commandParameters = args.splice(1);

const printUnknownCommandErrorMessage = function() {
    const message = "xdome: '" + commandName  + "' is not an xdome command. See 'xdome help'."
    printMessage(message);
};
const printMessage = function(message) {
    console.log('');
    console.log(message);
    console.log('');
};
const init = function() {
    if (commandIsUndefined) {
        return Main[commands['info'].method]();
    }
    if (isValidCommand) {
        try{
            Main[commands[commandName].method](...commandParameters);
        }catch(e){
            printMessage("xdome: an unexpected error ocurred.")
        }
    }
    else{
        printUnknownCommandErrorMessage();
    };
};

/* ########## */
init();
/* ########## */
