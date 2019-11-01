const BaseModule = require('./../../../BaseModule');

class restAccessPoint extends BaseModule{

    constructor(){ 
        super();
        this.destinationFolderName = '/server/modules';
    }

    createNewRestAccessPoint(){
        console.log('creating new module in '+ this.destinationFolderName)
    }

    init(){
        if (!this.directoriesAreValid().success){
            return console.log(this.directoriesAreValid().message)
        }
        return this.createNewRestAccessPoint()
    }

}

module.exports = new restAccessPoint();