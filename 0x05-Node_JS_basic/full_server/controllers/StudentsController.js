import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase('./database.csv');
      response.status(200).send('This is the list of our students');
      Object.keys(students).sort((a, b) => a.localeCompare(b)).forEach((field) => {
        response.write(`Number of students in ${field}: ${students[field].length}. List: `);
        response.write(students[field].map((student) => student.firstName).join(', '));
        response.write('\n');
      });
      response.end();
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const students = await readDatabase('./database.csv');
        response.status(200).send(`List: ${students[major].map((student) => student.firstName).join(', ')}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
