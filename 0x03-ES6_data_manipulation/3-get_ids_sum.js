export default function getStudentIdsSum(students) {
  // This function returns the sum of all the student ids.
  // The reduce() method reduces the array to a single value.
  // syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  return students.reduce((sum, student) => sum + student.id, 0);
}
