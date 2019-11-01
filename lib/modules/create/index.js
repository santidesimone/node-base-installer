const BaseModule = require('./../BaseModule');
const Git = require('nodegit')

class Create extends BaseModule{
    constructor(){
        super();
        const self = this;
    }

    create(pluginName) {
        super.pass();

        // let DESTINATION_DIRECTORY = "./tmp";
        // const BASE_SERVER_REPOSITORY_URL = "https://github.com/openshift/pipelines-docs";
    
        // Git.Clone(BASE_SERVER_REPOSITORY_URL, DESTINATION_DIRECTORY)
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
