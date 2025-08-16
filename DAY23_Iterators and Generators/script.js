// DAY 23: Iterators and Generators
// Iterator Example
function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      return index < array.length
        ? { value: array[index++], done: false }
        : { value: undefined, done: true };
    }
  };
}
const iterator = createIterator(['A', 'B', 'C']);
console.log(iterator.next()); // { value: 'A', done: false }
console.log(iterator.next()); // { value: 'B', done: false }
console.log(iterator.next()); // { value: 'C', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Generator Example
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
