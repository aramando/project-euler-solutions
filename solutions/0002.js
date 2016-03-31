/**
 *  https://projecteuler.net/problem=2
 * 
 *  Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 *  By starting with 1 and 2, the first 10 terms will be:  * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 * 
 *  By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
 *  find the sum of the even-valued terms.
 *  
 */
module.exports = function(){
    var term = 2;
    var previousTerm = 1;
    var sum = 0;
    while(term <= 4000000){
        sum += term % 2 ? 0 : term;
        term = term + previousTerm;
        previousTerm = term - previousTerm;
    }
    return sum;
};