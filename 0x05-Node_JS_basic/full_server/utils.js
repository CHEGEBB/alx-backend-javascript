import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const students = {};
        const fields = data.trim().split('\n')[0].split(',');
        const studentPropNames = fields.slice(0, fields.length - 1);

        for (const line of data.trim().split('\n').slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(students).includes(field)) {
            students[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          students[field].push(Object.fromEntries(studentEntries));
        }
        resolve(students);
      }
    });
  }
});

export default readDatabase;
