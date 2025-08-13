// DAY 20: Parameters and Template Literals 

// Default Parameters
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet('Vidyasagar'); // Hello, Vidyasagar!
greet(); // Hello, Guest!

// Template Literals
const user = 'Vidyasagar';
const role = 'Frontend Developer';
const message = `My name is ${user} and I work as a ${role}.`;

console.log(message);
// My name is Vidyasagar and I work as a Frontend Developer.

// Multi-line Template Literal
const multiLine = `
This is line one.
This is line two.
This is line three.
`;

console.log(multiLine);
