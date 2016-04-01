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

    var target = 600851475143;
    var factors = [target];
    var nextPrime = 2;

    while(nextPrime < factors[0]){
                
        while(!Number.isInteger(factors[0]/nextPrime) && nextPrime < factors[0]){
            nextPrime = lib.nextPrime(nextPrime);
        }
        
        if(factors[0]/nextPrime !== 1){
            factors[0] = factors[0]/nextPrime;
            factors.push(nextPrime);            
        }        
    }      
    
    factors.sort((a,b) => a - b);
    
    return factors.slice(-1); 

};