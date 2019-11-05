const BaseModule = require('./../BaseModule');
const Git = require('nodegit')

class Create extends BaseModule{
    constructor(){
        super();
        // this.destinationDirectory = "./"
        // this.projectName = "base-server"
        // this.baseServerRepositoryUrl = "https://github.com/jjdltc/base_server"
        const self = this;
    }

    // cloneRepository(){
    //     console.log(this.baseServerRepositoryUrl)
    // }

    create(projectName) {
        // super.pass();

        if(!super.newDirectoryNameIsValid(projectName).sucess){
            return super.printError(super.newDirectoryNameIsValid(projectName).message)
        }
        else{
            this.projectName = projectName;
            this.destinationDirectory = "./" + this.projectName
            return super.printHighlight( 'creating project in ' + this.destinationDirectory )
        }
        
        // const baseServerRepositoryUrl = "https://github.com/jjdltc/base_server"
        // Git.Clone(baseServerRepositoryUrl, this.destinationDirectory)
        // .then(function(repo) {
        //     if (repo){
                    // console.log('--------------------------------------------------');
                    // console.log('project successfuly created. to run the server:');
                    // console.log('');
                    // console.log('type: cd ' + this.projectName );
                    // console.log('then type: npm install');
                    // console.log('and finally type: npm run start');
                    // console.log('--------------------------------------------------');
        //     }
        //     else{
        //         console.log('something went wrong when trying to create your project. please retry');
        //     }
        // })
        // .catch(function(err) { 
        //     console.log(err); 
        // });

    };

}

module.exports = new Create();
