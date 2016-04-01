var fs = require('fs');

var modules = fs.readdirSync('./solutions');

modules.forEach(module => {

    var answer = require(`./solutions/${module}`)();    

    console.log(`${module.slice(0, -3)}: ${answer}`);

});