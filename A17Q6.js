/*Write a JavaScript program to find the Armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. */

var findArmstrongNumbers = () => {
    var armstrongNumbers = [];
    
    for (var num = 100; num <= 999; num++) {
      var sum = 0;
      var temp = num;
      
      while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
      }
      
      if (sum === num) {
        armstrongNumbers.push(num);
      }
    }
    
    return armstrongNumbers;
  }
  
  var armstrongNumbers = findArmstrongNumbers();
  console.log("The Armstrong numbers of 3 digits are:", armstrongNumbers);
  