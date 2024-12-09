// Math.abs
//  In JavaScript, the Math.abs() function is used to return the absolute value of a number.
// The absolute value of a number is its non-negative value, regardless of whether it is positive or negative.

//eg. 

console.log(Math.abs(-5.7))  // output 5.7
console.log(Math.abs(5.7))   // output 5.7
console.log(Math.abs(0))     // 0
console.log(Math.abs(10))   // 10

//Math.floor

//In JavaScript, the Math.floor() function rounds a number down to the nearest integer, effectively discarding the decimal portion of the number

console.log(Math.floor(4.9)) // output 4
console.log(Math.floor(4.1)) // output 4

//round
//In JavaScript, the Math.round() function rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, 
// it rounds up; otherwise, it rounds down.

console.log(Math.round(5.8)) // output 6
console.log(Math.round(4.4)) // output 4


//random
//In JavaScript, the Math.random() function generates a pseudo-random number between 0 (inclusive) and 1 (exclusive).
// It is commonly used for generating random values in applications such as games, simulations, or random data generation.

console.log(Math.random()) // random number between 0 to 1

console.log(Math.floor(Math.random()*10)) // between 0 to 10 

// max
//In JavaScript, the Math.max() function is used to find the largest number from a set of numbers.
// It is especially useful for comparing multiple numeric values at once.
console.log(Math.max(5, 10, 15)); // Output: 15
console.log(Math.max(3, -2, 0, 7)); // Output: 7

//min

console.log(Math.min(5, 10, 15)); // Output: 5
console.log(Math.min(3, -2, 0, 7)); // Output: -2