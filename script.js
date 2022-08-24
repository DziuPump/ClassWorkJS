//1. Write a function that takes two numbers (a and b) as Sum a and Return the result
const sum = function(a, b){
    return a+b;
}





//3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

const splitter = function (a){
    const array = Array.from(String(a), Number);
    return array;
}

