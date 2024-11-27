function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      const success = true; // Simulate an API response condition

      if (success) {
          resolve("API response received!");
      } else {
          reject("Failed to fetch API response.");
      }
  });
}

// Example usage:
getResponseFromAPI()
  .then((response) => console.log(response)) // Logs "API response received!" if successful
  .catch((error) => console.error(error));   // Logs "Failed to fetch API response." if rejected
