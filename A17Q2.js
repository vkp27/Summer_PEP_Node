/*Write a JavaScript function to find the sign of the product of three numbers. Display an alert box with the specified sign. 
Sample numbers : 3, -7, 2
Output : The sign is -
*/

var numSign = (a, b, c) => {
   var pro = a * b * c;
   var sign = pro < 0 ? '-' : '+';
  
   alert('The sign is ' + sign);
    
}

numSign(3, -7, 2);