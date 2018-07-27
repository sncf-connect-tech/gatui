export default class DocumentationInfos {
  constructor(docs) {
    this.docs = docs; // Array
  }

  // Getters
  static getString(value) { return ((value != null) ? value : ''); }
  static getArray(value) { return ((value != null) ? value : []); }

  getDocs() { return this.constructor.getArray(this.docs); }
}
