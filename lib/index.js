// ./lib/index.js

/**
 * Displays a string in the console
 * 
 * @param {string_to_say} String string to show in the console
 */
exports.say = function(string_to_say) {
    return console.log(string_to_say);
};

exports.create = function() {
    return console.log('this method should implement a base project creation');
};

exports.plugin = function() {
    return console.log('this method should plug-in new functionality to an already created base project');
};

