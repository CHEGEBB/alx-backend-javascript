export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(Array.isArray(students))) {
    return [];
  }
  const newStudents = students.filter((student) => student.location === city);
  return newStudents.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrades
      .filter((grade) => grade.studentId === student.id)
      .pop() || { grade: 'N/A' }
    ).grade,
  }));
}
