class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id || null;
    this.numberOfWheels = numberOfWheels || null;
    this.sound = sound || null;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}
module.exports = Vehicle;
