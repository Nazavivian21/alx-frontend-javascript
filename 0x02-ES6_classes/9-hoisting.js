export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// Creating instances of ALXClass
const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

// StudentALX definition
export class StudentALX {
  constructor(firstName, lastName, alxClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;  // Corrected reference to alxClass
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this._alxClass;  // Corrected getter
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`;  // Corrected reference to `this`
  }
}

// Creating instances of StudentALX
const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

// Export list of students
export const listOfStudents = [student1, student2, student3, student4, student5];