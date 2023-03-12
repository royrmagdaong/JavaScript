class Person {
  #age = 1;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge >= 0) {
      this.#age = newAge;
    }
  }
}

const john = new Person("John", 30);
john.age = 123;
console.log(john.getAge()); // Output: 30

john.setAge(-10); // This will have no effect

console.log(john.getAge()); // Output: 30

john.setAge(35);

console.log(john.getAge()); // Output: 35
