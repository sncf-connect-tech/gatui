export default class StatusInfos {
  constructor(status) {
    this.status = status; // Array
  }
  // Getters
  static getString(value) { return ((value != null) ? value : ''); }
  static getArray(value) { return ((value != null) ? value : []); }

  getStatus() { return this.constructor.getArray(this.status); }
}
