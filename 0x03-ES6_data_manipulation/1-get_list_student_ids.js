function getListStudentIds(array) {
  // Check if the input is an array, return an empty array if not
  if (!Array.isArray(array)) {
    return [];
  }

  // Use map to extract IDs from the objects
  return array.map((student) => student.id);
}
