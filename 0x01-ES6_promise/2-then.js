export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API'); // Log on resolution
      return { status: 200, body: 'success' };    // Return specified object
    })
    .catch(() => {
      console.log('Got a response from the API'); // Log on rejection
      return new Error();                         // Return empty Error object
    });
}
