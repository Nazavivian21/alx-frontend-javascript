export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // Create a new ArrayBuffer with the specified length
  const view = new Int8Array(buffer); // Create an Int8Array view on the buffer
  view[position] = value; // Set the value at the specified position

  return buffer; // Return the ArrayBuffer
}
