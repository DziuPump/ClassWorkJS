// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result
const sum = function(a, b){
    return a+b;
}

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
const lastThree = function(string){
    return string.substring(string.length -3)
}

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.
const splitter = function (a){
    return Array.from(String(a), Number);
}

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a
const returnN = function(a, n){
    return a.splice(-n);
}

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array
const arraySorter = function(arr1, arr2){
    const merged = [...new Set(arr1.concat(arr2))]
    return merged.sort((a, b) => a-b)
}

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise
const keyChecker = function(a, b){
    if(keys(a).includes(b)) return true;
    else return false;
}