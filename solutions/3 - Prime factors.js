/**
 *  https://projecteuler.net/problem=3
 * 
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 *  
 *  What is the largest prime factor of the number 600851475143 ?
 *  
 */

var lib = require('../lib.js');

module.exports = function(){

    return 0;

    var target = 600851475143;
    var primes = lib.getPrimes(1000000);
    var index = 0;
    var factors = [];
    var product = 0;

    while(index < primes.length - 1 && product < target){
        for(; index < primes.length; index++){
            if(Number.isInteger(target / primes[index])){
                factors.push(primes[index]);
                index++;
                break;
            }
        }
        product = factors.reduce((prev, curr, index) => prev + curr, 0);
    }

    if(index >= primes.length - 1){
        throw new Error('Not enough primes to check');
    }

    return factors.slice(0, -1);   

};