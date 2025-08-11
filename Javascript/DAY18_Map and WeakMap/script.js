// DAY 18: Map and Weakmap

// Map Example
const myMap = new Map();
myMap.set('name', 'Vidyasagar');
myMap.set(42, 'The answer');
myMap.set({ role: 'dev' }, 'Frontend Developer');

console.log(myMap.get('name')); // Vidyasagar
console.log(myMap.size); // 3

// WeakMap Example
const objKey = {};
const myWeakMap = new WeakMap();
myWeakMap.set(objKey, 'Some Value');

console.log(myWeakMap.get(objKey)); // Some Value
