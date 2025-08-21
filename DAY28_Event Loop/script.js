// DAY 28: Event Loop

console.log("Start");

setTimeout(() => console.log("⏱ Timeout"), 0); // Macrotask

Promise.resolve("✅ Promise resolved")
  .then(msg => console.log(msg)); // Microtask

console.log("End");

// Output order:
// Start
// End
// ✅ Promise resolved
// ⏱ Timeout
