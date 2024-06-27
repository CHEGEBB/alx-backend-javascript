class HolbertonCourse {
  constructor(_name, _length, _students) {
    this.name = _name;
    this.length = _length;
    this.students = _students;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get length() {
    return this.length;
  }

  set length(length) {
    this.length = length;
  }

  get students() {
    return this.students;
  }

  set students(students) {
    this.students = students;
  }
}

module.exports = HolbertonCourse;
