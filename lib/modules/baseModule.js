const util = require("fs");

class BaseModule {
  
    constructor(){}

    pass(){
        let message = 'this component is not yet implemented';
        return console.log(message);
    }

    isCurrentDirectoryRootFolder(){
        if (util.existsSync(process.cwd()+'/package.json')) {
            // console.log('is root')
            return true
        }
        // console.log('is not root')
        return false
    }

    destinationFolderExists(){
        if (util.existsSync(process.cwd()+this.destinationFolderName)) {
            // console.log('destination folder exists')
            return true
        }
        // console.log('destination folder doesnt exist')
        return false
    }

    directoriesAreValid(){
        if (!this.isCurrentDirectoryRootFolder()){
            return { success: false, message: 'please navigate to your project root directory' }
        }

        if (!this.destinationFolderExists()){
            return { success: false, message: 'it seems like there is no '+ this.destinationFolderName + ' folder in your project' }
        }
        else{
            return { success: true, message: 'directories are valid' }
        }
    }

}

module.exports = BaseModule;
