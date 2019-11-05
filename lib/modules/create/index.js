const BaseModule = require('./../BaseModule');
const Git = require('nodegit')
const jwt = require('jsonwebtoken');
const githubConfig = require('./../../config').constants.servicesInfo.github; 

class Create extends BaseModule{
    constructor(){
        super();
        const self = this;
    }

    cloneRepository(){
        let projectName = this.projectName;
        let githubAccessToken = '';
        try {
            var decoded = jwt.verify(githubConfig.token, githubConfig.secret);
            githubAccessToken = decoded.data;
            // console.log('githubAccessToken =>', githubAccessToken)
        } catch(err) {
            console.log('unexpected error ocurred while trying to get credentials for github remote repository authentication')
            // console.log(err)
            return
        }
        const cloneURL = `https://${githubAccessToken}:x-oauth-basic@github.com${githubConfig.repoPath}`;
        // console.log(cloneURL)
        super.printSpacedMessage( 'creating project in ' + this.destinationDirectory )
        Git.Clone(cloneURL, this.destinationDirectory)
        .then(function(repo) {
            if (repo){
                    console.log('');
                    console.log('project successfuly created. to run the server:');
                    console.log('');
                    console.log('type: cd ' + projectName );
                    console.log('then type: npm install');
                    console.log('and finally type: npm run start');
                    console.log('');
            }
            else{
                console.log('something went wrong when trying to create your project. please retry');
            }
        })
        .catch(function(err) { 
            // console.log(err); 
            console.log('something went wrong when trying to create your project. please retry');
        }); 
    }

    init(projectName) {
        if(!super.newDirectoryNameIsValid(projectName).sucess){
            return super.printError(super.newDirectoryNameIsValid(projectName).message)
        }
        else{
            this.projectName = projectName;
            this.destinationDirectory = "./" + this.projectName
            this.cloneRepository()
        }
    };

};

module.exports = new Create();
