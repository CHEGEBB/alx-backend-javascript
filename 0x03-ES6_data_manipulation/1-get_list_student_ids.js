export default function getListStudentsIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const ids = array.map((element) => element.id);
  return ids;
}
