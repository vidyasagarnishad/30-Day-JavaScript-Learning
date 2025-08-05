// DAY 12: Scope(Global vs Local) 

// Global Scope
let name = "Vidyasagar";

function greet() {
  // Local Scope
  let message = "Hello " + name;
  console.log(message); // ✅ Accessible
}

greet();
console.log(name);    // ✅ Accessible
// console.log(message); ❌ Error: message is not defined

// Block Scope (with let/const)
if (true) {
  const age = 24;
  console.log("Inside block:", age); // ✅
}
// console.log(age); ❌ Error: age is not defined
