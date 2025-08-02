// DAY 9: Array Methods

let numbers = [1, 2, 3, 4, 5];

numbers.push(6);             // [1, 2, 3, 4, 5, 6]
numbers.pop();               // [1, 2, 3, 4, 5]
numbers.unshift(0);          // [0, 1, 2, 3, 4, 5]
numbers.shift();             // [1, 2, 3, 4, 5]

// map(): Multiply every number by 2
let doubled = numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]

// filter(): Keep only even numbers
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Evens:", evens);
