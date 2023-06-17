/*According to Wikipedia a happy number is defined by the following process : "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". Write a JavaScript program to find and print the first 5 happy numbers.
*/

function isHappyNumber(num) {
    var visitedNumbers = {};
    
    while (num !== 1 && !visitedNumbers[num]) {
      visitedNumbers[num] = true;
      var sum = 0;
      
      while (num > 0) {
        var digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
      }
      
      num = sum;
    }
    
    return num === 1;
  }
  
  function findHappyNumbers(count) {
    var happyNumbers = [];
    var num = 1;
    
    while (happyNumbers.length < count) {
      if (isHappyNumber(num)) {
        happyNumbers.push(num);
      }
      num++;
    }
    
    return happyNumbers;
  }
  
  var firstFiveHappyNumbers = findHappyNumbers(5);
  console.log("The first 5 happy numbers are:", firstFiveHappyNumbers);
  