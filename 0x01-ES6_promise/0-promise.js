function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      const success = true;

      if (success) {
          resolve('API response received!');
      } else {
          reject(new Error('Failed to fetch API response.'));
      }
  });
}
