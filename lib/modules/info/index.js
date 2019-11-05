const BaseModule = require('./../BaseModule');

class Info extends BaseModule{
    constructor(){
        super();
        const self = this;
    }

    info(projectName) {
        super.pass();
    };

}

module.exports = new Info();
