// DAY 5: Numbers & Math Object

let x = 5;
let y = 2.7;

// Basic arithmetic
console.log("Addition:", x + y);         // 7.7
console.log("Multiplication:", x * y);   // 13.5

// Rounding
console.log("Math.round(y):", Math.round(y));   // 3
console.log("Math.floor(y):", Math.floor(y));   // 2
console.log("Math.ceil(y):", Math.ceil(y));     // 3

// Power & Square root
console.log("Power:", Math.pow(x, 2));    // 25
console.log("Square root:", Math.sqrt(25)); // 5

// Random number (between 0–100)
let randomNum = Math.floor(Math.random() * 101);
console.log("Random number:", randomNum);
