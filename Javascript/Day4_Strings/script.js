// DAY 4: Strings & String Methods

let message = "Hello JavaScript!";

// Length of the string
console.log(message.length);  // 17

// Convert to uppercase and lowercase
console.log(message.toUpperCase()); // "HELLO JAVASCRIPT!"
console.log(message.toLowerCase()); // "hello javascript!"

// Check if the string includes a word
console.log(message.includes("Java"));  // true
console.log(message.includes("Python")); // false

// Extract a substring
console.log(message.slice(6, 16)); // "JavaScript"

// Replace part of the string
console.log(message.replace("JavaScript", "World")); // "Hello World!"
