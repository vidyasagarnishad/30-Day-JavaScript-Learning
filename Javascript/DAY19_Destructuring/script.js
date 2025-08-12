// DAY 19: Destructuring 

// Array Destructuring
const fruits = ['Apple', 'Banana', 'Cherry'];
const [first, second] = fruits;
console.log(first, second); // Apple Banana

// Object Destructuring
const user = { name: 'Vidyasagar', role: 'Frontend Developer' };
const { name, role } = user;
console.log(name, role); // Vidyasagar Frontend Developer

// Spread Example
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest Example
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
