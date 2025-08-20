// DAY 27: Modules

// Exporting a function
export function add(a, b) {
  return a + b;
}



// Importing the function from math.js
import { add } from './math.js';

console.log(add(5, 10)); // 👉 15
