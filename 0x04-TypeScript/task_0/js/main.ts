interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Jay',
    lastName: 'Sean',
    age: 21,
    location: 'New York',
}

const student2: Student = {
    firstName: 'Grace',
    lastName: 'Shay',
    age: 20,
    location: 'Los Angeles',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
