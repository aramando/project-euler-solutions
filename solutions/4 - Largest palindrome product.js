/**
 *  https://projecteuler.net/problem=4
 * 
 *  A palindromic number reads the same both ways. The largest palindrome made from 
 *  the product of two 2-digit numbers is 9009 = 91 × 99.
 *  
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 *  
 */

//var lib = require('../lib.js');

module.exports = function(){

    var a = 999;
    var b = 999;
    var p = [];
    var lowerBound = 899;

    while(lowerBound > 100 && !p.length){
        while(a > lowerBound){
            while(b > lowerBound){
                if(isPalindrome(a*b)){           
                    p.push(a*b);
                }
                b--;
            }
            b = 999;
            a--;                  
        }
        lowerBound -= 100;
    }    

    p.sort((a,b) => a-b);
    return p.slice(-1);

    function isPalindrome(num){
        var numStr = num.toString();
        var l = numStr.length - 1,
            i = Math.floor(l / 2);
        while(i >= 0){
            if(numStr[i] !== numStr[l - i]){
                return false;
            }
            i--;
        }
        return true;
    }



};