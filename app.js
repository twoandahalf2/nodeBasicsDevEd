
///this is the node.js wrapper that is around our code

// (function(exports, require, module, __filename, __dirname) { 
//     // Module code actually lives in here 
// }); 


const {sayName, sayAddress} = require(`./sayName`)
//or const getUserInfo = require(`./sayName`)
// getUserInfo.sayName() 

sayName()
sayAddress()


console.log(`FileName: ${__filename}`)