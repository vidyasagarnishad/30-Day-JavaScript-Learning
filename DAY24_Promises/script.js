// DAY 24: Promises

// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Data fetched successfully");
  } else {
    reject("❌ Error fetching data");
  }
});

// Handling the Promise
fetchData
  .then(result => console.log(result))   // Runs if resolved
  .catch(error => console.log(error))    // Runs if rejected
  .finally(() => console.log("✔ Operation complete")); // Runs always
