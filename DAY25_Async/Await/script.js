// DAY 25: Async/Await

// Using async/await
async function getUser() {
  try {
    // Await waits until the Promise resolves
    let user = await Promise.resolve("👤 User data loaded");
    console.log(user);  // Prints resolved value
  } catch (error) {
    // Handles any error
    console.log("Error:", error);
  }
}

getUser(); // Call the async function
