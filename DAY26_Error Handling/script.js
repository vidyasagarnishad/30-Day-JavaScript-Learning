// DAY 26: Error Handling

// Async function with error handling
async function fetchData() {
  try {
    // Simulating a rejected Promise
    let response = await Promise.reject("❌ Network error");
    console.log(response);
  } catch (error) {
    // Catch block handles the error
    console.log("Caught Error:", error);
  } finally {
    // Always runs no matter what
    console.log("✔ Operation finished");
  }
}

fetchData();
