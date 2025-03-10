//1.Develop a program initializing 4 variables [a, b, c, d] and 1 constant [e], store the following values:
let_a = 25;
let_b = 20;
let_c = 12;
let_d = "15";  
const_e = 15;   

//Display the sum of the declared variables [a,b,c,d] and constant [e] combined.
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);
console.log("e:", e);

//Sum of variables a, b, c, and e
let_sum = a + b + c + e;
console.log("Sum of a, b, c, and e:", sum);

//Compare the values of variable d and constant e using relational operators [>, <, =>,<=, and ===], then display the results.
console.log("d == e:", d == e); 
console.log("d === e:", d == e); 

//Declare new variables to store the result/s of the following operations, then after, display the results:
let_subtractionResult;
let_multiplicationDivisionResult;
let_exponentiationResult;
let_reassignmentResult;

// 1. Subtraction
subtractionResult = a - b - c - parseInt(d) - e; 

// 2. Multiplication and Division
multiplicationDivisionResult = (a * c) / e;

// 3. Exponentiation
exponentiationResult = Math.pow(e, c);

// 4. Reassignment
reassignmentResult = e; e = c * 3;
reassignmentResult = e - reassignmentResult; 

// Display the results
console.log("Subtraction Result:", subtractionResult);
console.log("Multiplication/Division Result:", multiplicationDivisionResult);
console.log("Exponentiation Result:", exponentiationResult);
console.log("Reassignment Result:", reassignmentResult);
console.log("New value of e:", e);