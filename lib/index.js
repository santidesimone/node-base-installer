// ./lib/index.js

/**
 * Displays a string in the console
 * 
 * @param {string_to_say} String string to show in the console
 */
exports.say = function(string_to_say) {
    return console.log(string_to_say);
};



const git = require('nodegit')

exports.create = function() {

    // console.log('this method should implement a base project creation');
    console.log('this method should implement a base project creation');

    let destination_directory = "./tmp";
    const base_server_repository_url = "https://github.com/openshift/pipelines-docs";

    var Git = require("nodegit");
    
    Git.Clone(base_server_repository_url, destination_directory)
    .then(function(repo) {
        if (repo){
            console.log('operation was successful');
            console.log(repo);
        }
        else{
            console.log('something went wrong');
        }
    })
    .catch(function(err) { 
        console.log(err); 
    });

};


// var REPO="";
// var FILE_URL="";

// var REPO=process.argv[2];


// const ABSOLUT_URL=`https://github.com/santidesimone/${REPO}/blob/master/`;

// const GITHUB_MASTER_TOKEN= "c17385d0393f41fe1a5cd52bc1a8a0cd92f2c63f";
// const API_URL = `https://${GITHUB_MASTER_TOKEN}:@api.github.com/repos/santidesimone/${REPO}`;



// const axios= require("axios");
// const url= `${API_URL}/contents/${FILE_URL}`;

// const headers = {
//     'Accept': 'application/octet-stream',
//     'Accept': 'application/vnd.github.spiderman-preview',
//     'User-Agent': 'request module',
// };

// const url = "https://jsonplaceholder.typicode.com/posts";
// const cloneRepository = async url => {
//     try {
//         const response = await axios.get(url);
//         const dataResponse = response.data;
//         self.response.status(200).json({
//           response: dataResponse,
//           message: "success"
//         })
//     } catch (error) {
//       self.response.error(200).json({
//         response: dataResponse,
//         message: "error"
//       })
//     }
// };
// cloneRepository(url);














exports.plugin = function() {
    return console.log('this method should plug-in new functionality to an already created base project');
};

