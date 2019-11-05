var pjson = require('./../../../package.json');

class Version {
    constructor(){}

    init(...args) {
        console.log('xdome version: ' + pjson.version);
    }

}

module.exports = new Version();
