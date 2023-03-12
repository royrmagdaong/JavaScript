class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  let animal = new Animal("Generic Animal");
  let dog = new Dog("Fido");
  let cat = new Cat("Whiskers");
  
  animal.speak(); // Output: "Generic Animal makes a noise."
  dog.speak(); // Output: "Fido barks."
  cat.speak(); // Output: "Whiskers meows."