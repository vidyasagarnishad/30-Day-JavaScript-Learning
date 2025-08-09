// DAY 16: Higher-Order-Functions

// ✅ filter() – Select items from an array based on a condition

const Numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const evenNumbers = Numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

/* 💡 Why use it?
It’s perfect for extracting data without manually looping and pushing items into a new array.*/



// ✅ reduce() – Combine array values into a single result
const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15

/*💡 Why use it?
It’s a powerful way to calculate totals, merge objects, or transform arrays into something 
completely different.*/


