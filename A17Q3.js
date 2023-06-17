/* Write a JavaScript function to find the largest of five numbers. Display an alert box to show the results. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0
*/

var maxNum = (arr) => {
    var mx = -1e9;
    for(let i=0;i<5;i++){
        if(arr[i] > mx){
            mx = arr[i];
        }
    }

    return mx;
}

alert(maxNum([-5, -2, -6, 0, -1]));