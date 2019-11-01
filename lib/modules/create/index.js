const BaseModule = require('./../BaseModule');
const Git = require('nodegit')

class Create extends BaseModule{
    constructor(){
        super();
        this.destinationDirectory = "./"
        this.projectName = "base-server"
        this.baseServerRepositoryUrl = "https://github.com/openshift/pipelines-docs"
        const self = this;
    }

    create(projectName) {
        // super.pass();

        if(!super.newDirectoryNameIsValid(projectName).sucess){
            return console.log(super.newDirectoryNameIsValid(projectName).message)
        }
        else{
            this.projectName = projectName;
            this.destinationDirectory = "./" + this.projectName
            return console.log('creating project in ' + this.destinationDirectory )
        }

        // Git.Clone(this.baseServerRepositoryUrl, this.destinationDirectory)
        // .then(function(repo) {
        //     if (repo){
        //         console.log('operation was successful');
        //         console.log(repo);
        //     }
        //     else{
        //         console.log('something went wrong');
        //     }
        // })
        // .catch(function(err) { 
        //     console.log(err); 
        // });

    };

}

module.exports = new Create();
