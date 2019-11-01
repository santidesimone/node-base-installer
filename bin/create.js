#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
let args = process.argv.splice(process.execArgv.length + 2);
let projectName = args[0];
const Main = new(require('../lib/index.js'))();

Main.create(projectName);