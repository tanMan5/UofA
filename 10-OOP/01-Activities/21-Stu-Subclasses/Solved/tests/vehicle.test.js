const Vehicle = require("../vehicle");

describe("Vehicle", () => {
  describe("Initialization", () => {
    // Positive test
    it("When given no properties, it should create an object with an id, number of wheels, and sound, all with null values ", () => {
      // Arrange
      const vehicle = new Vehicle();

      // Assert
      expect(vehicle.id).toEqual(null);
      expect(vehicle.numberOfWheels).toEqual(null);
      expect(vehicle.sound).toEqual(null);
    });
    // Positive test
    it("When given an id, number of wheels and sound, it should create an object with an id, number of wheels, and sound, whose values match the inputs", () => {
      // Arrange
      const name = 'John';
      const numWheels = 7;
      const sound = 'beep';
      const vehicle = new Vehicle(name, numWheels, sound);

      // Assert
      expect(vehicle.id).toEqual(name);
      expect(vehicle.numberOfWheels).toEqual(numWheels);
      expect(vehicle.sound).toEqual(sound);
    });
  });
});
