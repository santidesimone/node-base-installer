const util = require("fs");
// const config = require('./../../config');

class BaseModule {
  
    constructor(){
        // this.config = config;
    }

    pass(){
        let message = 'this component is not yet implemented and will be available in a future release version';
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

    destinationFolderExists(destinationPath){
        let destPath = destinationPath || this.destinationFolderName;
        if (util.existsSync(process.cwd()+ destPath)) {
            // console.log('destination folder exists')
            return { success: true, message: 'destination folder already exists' }
        }
        // console.log('destination folder doesnt exist')
        return { success: false, message: 'destination folder doesnt exist' }
    }

    directoriesAreValid(){
        if (!this.isCurrentDirectoryRootFolder()){
            return { success: false, message: 'please navigate to your project root directory' }
        }

        if (!this.destinationFolderExists().success){
            return { success: false, message: 'it seems like there is no '+ this.destinationFolderName + ' folder in your project' }
        }
        else{
            return { success: true, message: 'directories are valid' }
        }
    }

    newDirectoryNameIsValid(directoryName){

        console.log(directoryName, 'newDirectoryNameIsValid')

        let isValid = true;
        let errorMessage = 'an error ocurred while trying to validate the provided directory name';

        if(!directoryName || directoryName === ""){
            isValid = false
            errorMessage = 'please provide a directory name.';
            // console.log(directoryName)
        }
        else{
            // check if directoryName have no spaces 
            if (/\s/.test(directoryName)) {
                isValid = false
                errorMessage = 'directory name should not contain spaces.';
                console.log(errorMessage)
            }
            // check if directoryName have no special characters
            if (/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/g.test(directoryName)) {
                isValid = false
                errorMessage = 'directory name should not contain special characters.';
                console.log(errorMessage)
            }
            // check if directoryName already exists
            if (util.existsSync(process.cwd()+'/'+directoryName)) {
                isValid = false
                errorMessage = "directory name " + "'" + directoryName + "'" + " already exists.";
                console.log(errorMessage)
            }
        }

        if (!isValid){
            return { sucess: false, message: errorMessage };
        }
        return { sucess: true, message: 'new directory name is valid'};;
    }

    printError(message){
        console.log('--------------------------------------------------');
        console.log('ERROR: ' + message);
        console.log('--------------------------------------------------');
    }

    printHighlight(message){
        console.log('--------------------------------------------------');
        console.log(message);
        console.log('--------------------------------------------------');
    }

    printSpacedMessage(message){
        console.log('');
        console.log(message);
        console.log('');
    }

    printLine(message){
        console.log('--------------------------------------------------');
    }

}

module.exports = BaseModule;
