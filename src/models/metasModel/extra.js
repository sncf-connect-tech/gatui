export default class Extra {
  constructor({
    trigram,
    projetName
  }) {
    this.trigram = trigram;
    this.projetName = projetName;
  }

  // Getters
  static getString(value) { return ((value != null) ? value : ''); }

  getTrigram() { return this.constructor.getString(this.trigram); }
  getProjetName() { return this.constructor.getString(this.projetName); }
}
