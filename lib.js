module.exports = {
    isPrime,
    getPrimes,
    leftPad
};

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(var i = 2, n = (Math.ceil(num / 2); , < n; i++){
        if(num / i === Math.trunc(num / i)){
            return false;
        }
    }
}


function getPrimes(upTo){
    var str = '';
    for(var i = 1; i <= upTo; i++){
        if(isPrime(i)){
            str += i + ', ';
        }
    }
    return str.substr(-2);
}


function leftPad(num, length){
    var str = String(num);
    while(str.length < length){
        str = '0' + str;
    }
    return str;
}