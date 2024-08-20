const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs
    .readFileSync(path, { encoding: 'utf8' })
    .toString()
    .trim()
    .split('\n');
  const headers = data.shift().split(',');
  const students = data.map((line) => line.split(','));
  const fields = {};
  students.forEach((student) => {
    student.forEach((field, i) => {
      if (headers[i] === 'field') {
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      }
    });
  });
  console.log(`Number of students: ${students.length}`);
  for (const field in fields) {
    if (Object.hasOwnProperty.call(fields, field)) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  }
};

module.exports = countStudents;
