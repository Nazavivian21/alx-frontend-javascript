export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Default string representation of the class
  toString() {
    return `[object ${this._code}]`;
  }
}
