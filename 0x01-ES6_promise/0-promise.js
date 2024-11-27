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
