// DAY 11: Arrow Functions

// Regular function
function square(n) {
  return n * n;
}
console.log("Square (regular):", square(5)); // 25

// Arrow function (same logic)
const squareArrow = (n) => n * n;
console.log("Square (arrow):", squareArrow(5)); // 25

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log("Add:", add(3, 7)); // 10

// Arrow function with no parameters
const greet = () => console.log("Hello from arrow function!");
greet(); // Hello from arrow function!
