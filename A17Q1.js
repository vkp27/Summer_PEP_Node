// Write a JavaScript program that displays the largest integer among two integers.

var maxNum = (a, b) => {
    if(b > a){
        return b;
    }
    return a;
}

console.log(maxNum(10, 2));