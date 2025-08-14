// DAY 21: Object Literals

const name = 'Vidyasagar';
const role = 'Frontend Developer';
const dynamicKey = 'status';

// Shorthand Property Names
const user = { name, role };
console.log(user); // { name: 'Vidyasagar', role: 'Frontend Developer' }

// Shorthand Method Definition
const person = {
  greet() {
    console.log(`Hello, my name is ${name}`);
  }
};
person.greet(); // Hello, my name is Vidyasagar

// Computed Property Names
const obj = {
  [dynamicKey]: 'Active'
};
console.log(obj); // { status: 'Active' }
