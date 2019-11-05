const BaseModule = require('./../../../BaseModule');
const fs = require("fs");

class accessPoint extends BaseModule{

    constructor(){ 
        super();
        this.destinationFolderName = '/src/modules';
    }

    createNewAccessPoint(){

        const dirPath = this.accessPointName;

        const createDir = () => { 
            fs.mkdirSync(process.cwd() + this.destinationFolderName + dirPath, {recursive:true}, (error) => { 
                if (error) {
                    console.error(error)
                    console.log('error')
                } 
                else { 
                    console.log('dir was made')
                } 
            });
        };

        const createFile = (filePath, fileContent) => { 
            fs.writeFile( filePath, fileContent, (error) => { 
                if (error) {
                    console.error(error)
                } 
                else { 
                    console.log('file was made')
                } 
            });
        };

        console.log('creating new module in '+ this.destinationFolderName + dirPath)

        // createDir('/'+this.accessPointName)

    }

    init(...args){
        this.accessPointName = (args[0]!=undefined)?args[0]:undefined;

        if (!this.directoriesAreValid().success){
            return super.printHighlight(this.directoriesAreValid().message)
        }

        // if(super.destinationFolderExists(this.destinationFolderName + this.accessPointName).success){
        //     return super.printHighlight(super.destinationFolderExists(this.destinationFolderName + this.accessPointName).message)
        // }
        // else{
        //     console.log(this.accessPointName, 'this.accessPointName')
        //     return this.createNewAccessPoint()
        // }

    }

}

module.exports = new accessPoint();