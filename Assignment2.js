let a = 25;
let b = 20;
let c = 12;
let d = ("15"); //string type
let e = 15; // Constant

// a. Sum of variables and constant
let sum = a + b + c + d + e;
console.log("Sum:", sum); // Display the sum

// b. Comparison using relational operators
console.log("d > e:", d > e); // Check if d is greater than e
console.log("d < e:", d < e); // Check if d is less than e
console.log("d >= e:", d >= e); // Check if d is greater than or equal to e
console.log("d <= e:", d <= e); // Check if d is less than or equal to e
console.log("d === e:", d === e); // Check if d is strictly equal to e

// c. Additional operations
let subtractionResult = a - b - c - d - e;
let multiplicationResult = (a * c) / e;
let exponentResult = Math.pow(e, c); // Calculate e raised to the power of c
e = c * 3; // Reassign the value of e
console.log("Subtraction Result:", subtractionResult); // Display the subtraction result
console.log("Multiplication Result:", multiplicationResult); // Display the multiplication result
console.log("Exponent Result:", exponentResult); // Display the exponent result
console.log("Reassigned e:", e); // Display the reassigned value of e