import Car from './10-car.js';  // Import the Car class

// EVCar extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the Car class to initialize brand, motor, and color
    super(brand, motor, color);
    this._range = range;  // Add range for the electric car
  }

  // Override the cloneCar method
  cloneCar() {
    // Return an instance of the Car class instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
