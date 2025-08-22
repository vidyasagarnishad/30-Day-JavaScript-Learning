// DAY 29: Closures

function counter() {
  let count = 0; // Private variable
  return function () {
    count++;       // Inner function has access to outer scope
    return count;
  }
}

// Each call remembers 'count'
const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
