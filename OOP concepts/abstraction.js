class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }

  stop() {
    console.log(`Stopping the ${this.make} ${this.model}`);
  }
}

let myCar = new Car("Toyota", "Camry", 2020);
myCar.start();
myCar.stop();
