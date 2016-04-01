/**
 *  https://projecteuler.net/problem=5
 *  
 *  2520 is the smallest number that can be divided by each of 
 *  the numbers from 1 to 10 without any remainder.
 *  
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *  
 */
module.exports = function(){
    
    var n = 2520;

    while(n++){
        if(n % 20 === 0 // covers 20, 10, 5, 4, 2
            && n % 19 === 0
            && n % 18 === 0 // covers 18, 9, 6, 3
            && n % 17 === 0
            && n % 16 === 0 // covers 16, 8, 4, 2
            && n % 15 === 0 // covers 15, 5, 3
            && n % 14 === 0 // covers 14, 7
            && n % 13 === 0
            && n % 12 === 0 // covers 12, 6, 4, 3
            && n % 11 === 0
           ){
            break;
        }
    }

    return n;

};