//Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if...else construct or a ternary expression - the Math.max method is not allowed
function maxOfTwoNumbers(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(maxOfTwoNumbers(10, 55));

//Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(maxOfThree(15, 17, 14))

//Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(one) {
    if (one === "a" || one === "e" || one === "i" || one === "u" || one === "o") {
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel("u"));

//Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11
function sumArray(x, y) {
    return x + y;
}
console.log(sumArray(10, 3))

//Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40
function multiplyArray(x, y) {
    return x * y;
}
console.log(multiplyArray(5, 5))

//Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called
function numArgs() {
   return arguments.length
}
console.log(numArgs(40, 5, 1))