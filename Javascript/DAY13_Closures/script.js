// DAY 13: Closures

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log("Counter:", counter);
  }

  return inner;
}

const count = outer();  // outer() is called once
count(); // Counter: 1
count(); // Counter: 2
count(); // Counter: 3
