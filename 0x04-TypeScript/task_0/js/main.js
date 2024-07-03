var student1 = {
    firstName: 'Jay',
    lastName: 'Sean',
    age: 21,
    location: 'New York',
};
var student2 = {
    firstName: 'Grace',
    lastName: 'Shay',
    age: 20,
    location: 'Los Angeles',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
