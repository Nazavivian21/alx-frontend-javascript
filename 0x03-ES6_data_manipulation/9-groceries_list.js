function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
      throw new Error("Cannot process");
  }

  // Iterate through the map and update quantity to 100 for items with quantity 1
  for (let [key, value] of groceriesMap) {
      if (value === 1) {
          groceriesMap.set(key, 100);
      }
  }

  return groceriesMap;
}

// Example usage
const groceries = new Map([
  ['Apples', 10],
  ['Tomatoes', 10],
  ['Pasta', 1],
  ['Rice', 1],
  ['Banana', 5]
]);

try {
  const updatedGroceries = updateUniqueItems(groceries);
  console.log(updatedGroceries);
} catch (error) {
  console.log(error.message);
}
