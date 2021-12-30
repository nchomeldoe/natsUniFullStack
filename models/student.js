const { v4: uuidv4 } = require("uuid");

class Student {
  constructor(data) {
    this.subjects = data.subjects;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
    this.id = uuidv4();
    this.dateCreated = new Date().toUTCString();
    this.dateModified = null;
  }
}

module.exports = Student;
