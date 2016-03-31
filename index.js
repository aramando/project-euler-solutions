var solution = true, 
    p = 1;

while(solution){
    try{
        solution = require(`./solutions/${leftPad(p, 4)}.js`);
        console.log(`Problem ${p}: ` + solution());
        p++;
    }
    catch(e){
        solution = null;  
    }
} 



function leftPad(num, length){
    var str = String(num);
    while(str.length < length){
        str = '0' + str;
    }
    return str;
}