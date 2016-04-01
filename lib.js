module.exports = {
    isPrime,
    getPrimes,
    nextPrime,
    leftPad
};

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(var i = 2, n = Math.ceil(num / 2); i <= n; i++){
        if(Number.isInteger(num / i)){
            return false;
        }
    }
    return true;
}


function nextPrime(n){
    n++;
    while(!isPrime(n)){
        n++;
    }
    return n;
}


function getPrimes(to, from){
    to = to || 10;
    var primes = [];
    for(var i = from || 1; i <= to; i++){
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