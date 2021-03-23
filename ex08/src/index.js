class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getPerson() {
    let personInfo = `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    return personInfo;
  }
}

exports.Person = Person;
