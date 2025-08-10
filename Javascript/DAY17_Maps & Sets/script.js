// DAY 17: Set and WeakSet

// Set Example
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate won't be added
console.log(mySet); // Output: Set(2) {1, 2}


// WeakSet Example
const obj1 = {};
const obj2 = {};
const myWeakSet = new WeakSet([obj1]);
myWeakSet.add(obj2);
console.log(myWeakSet.has(obj1)); // true
