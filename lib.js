module.exports = {
    isPrime,
    getPrimes,
    leftPad
};

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(var i = 2, n = Math.ceil(num / 2); i <= n; i++){
        if(num / i === Math.trunc(num / i)){
            return false;
        }
    }
    return true;
}


function getPrimes(upTo){
    upTo = upTo || 10;
    var primes = [];
    for(var i = 1; i <= upTo; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;    
}


function leftPad(num, length){
    var str = String(num);
    while(str.length < length){
        str = '0' + str;
    }
    return str;
}