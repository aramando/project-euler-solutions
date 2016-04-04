var fs = require('fs');
var args = process.argv;

var modules = fs.readdirSync('./solutions');

var startAt = args.indexOf('--all') >= 0 ? 0 : modules.length - 1;

for(var i = startAt; i < modules.length; i++){

    var module = modules[i];

    var answer = require(`./solutions/${module}`)();    

    console.log(`${module.slice(0, -3)}: ${answer}`);

}