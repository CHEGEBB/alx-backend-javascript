export default function getListStudentsByLocation(students, location) {
  return students.filter((student) => student.location === location);
}
