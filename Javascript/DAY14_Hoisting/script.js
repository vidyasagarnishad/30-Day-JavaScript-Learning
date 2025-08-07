// DAY 14: Hoisting

console.log(name); // undefined
var name = "Vidyasagar";

// JavaScript interprets this as:
var name;
console.log(name); // undefined
name = "Vidyasagar";


// ⚠️ But with let or const, hoisting behaves differently:
console.log(age); // ❌ ReferenceError
let age = 25;
