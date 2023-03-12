class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    eat(food) {
      console.log(`${this.name} the ${this.species} is eating ${food}.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name, "cat");
    }
  
    meow() {
      console.log(`${this.name} the cat says meow!`);
    }
  }
  
  const myCat = new Cat("Whiskers");
  myCat.eat("fish"); // Output: Whiskers the cat is eating fish.
  myCat.meow(); // Output: Whiskers the cat says meow!