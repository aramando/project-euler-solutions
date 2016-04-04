/**
 *  https://projecteuler.net/problem=7
 *  
 *  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
 *  we can see that the 6th prime is 13.
 *  
 *  What is the 10 001st prime number?
 *  
 */
module.exports = function(){

    var lib = require('../lib');

    var count = 1;
    var prime = 2;

    while(count < 10001){
        prime = lib.nextPrime(prime);
        count++;
    }

    return prime;

};