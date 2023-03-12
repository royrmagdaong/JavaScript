class Person {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`Hi, my name is ${this.name}`);
    }
  }
  
  class Student extends Person {
    constructor(name, grade) {
      super(name);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying for a ${this.grade} grade.`);
    }
  }
  
  const john = new Student("John", "B");
  john.speak(); // Output: "Hi, my name is John"
  john.study(); // Output: "John is studying for a B grade."