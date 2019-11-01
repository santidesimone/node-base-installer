
class restAccessPoint{

    constructor(){ 
        this.destinationFolderName = '/server/modules';
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


    init(){

        if (!this.isCurrentDirectoryRootFolder()){
            console.log('please navigate to your project root directory')
        }

        if (!this.destinationFolderExists()){
            console.log('it seems like there is no '+ this.destinationFolderName + ' folder in your project')
        }
        else{
            console.log('creating new module ...')
        }


    }

}

module.exports = new restAccessPoint();
