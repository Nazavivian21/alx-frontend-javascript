export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    // Creates a new instance of the same class with the same properties
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
