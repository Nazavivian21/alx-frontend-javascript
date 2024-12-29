export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
    // Check if the endpoint already exists in the weakMap
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0); // Initialize the count to 0
    }

    // Increment the count for the endpoint
    const currentCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, currentCount);

    // Check if the query count has reached or exceeded 5
    if (currentCount >= 5) {
        throw new Error('Endpoint load is high');
    }
}
