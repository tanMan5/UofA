class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    for (let key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

module.exports = Shape;
