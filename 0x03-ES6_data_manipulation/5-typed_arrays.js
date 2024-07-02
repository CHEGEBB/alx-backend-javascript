export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const buffer = new DataView(buf, 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
