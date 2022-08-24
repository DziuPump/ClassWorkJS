//3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

const a = 123456789

const splitter = function (a){
    const array = Array.from(String(a), Number);
    return array;
}

console.log(splitter(a))