const BaseModule = require('./../../../BaseModule');

class accessPoint extends BaseModule{

    constructor(){ 
        super();
        this.destinationFolderName = '/server/modules';
    }

    createNewAccessPoint(){
        console.log('creating new module in '+ this.destinationFolderName)
    }

    init(){
        if (!this.directoriesAreValid().success){
            return super.printHighlight(this.directoriesAreValid().message)
        }
        return this.createNewAccessPoint()
    }

}

module.exports = new accessPoint();