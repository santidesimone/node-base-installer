class BaseModule {
  
    constructor(){}

    pass(){
        let message = 'this component is not yet implemented';
        return console.log(message);
    }

    isCurrentDirectoryProjectRoot(){
       console.log(process.cwd())
    }
}

module.exports = BaseModule;
