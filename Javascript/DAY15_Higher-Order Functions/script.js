// DAY 15: Higher-Order Functions


//  Example: Using map() as a Higher-Order Function

const numbers = [1, 2, 3, 4, 5];

// Using map() to double each number
const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]



// Example: Returning a Function

function greet(message) {
    return function(name) {
        return `${message}, ${name}!`;
    }
}

const sayHello = greet("Hello");
console.log(sayHello("Vidyasagar")); // Hello, Vidyasagar!
