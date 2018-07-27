export default class GlobalInfos {
  constructor({
    shortName,
    shortDesc,
    longName,
    longDesc,
    contributeurs,
    owner,
    category,
    path,
    priority
  }) {
    this.shortName = shortName;
    this.shortDesc = shortDesc;
    this.longName = longName;
    this.longDesc = longDesc;
    this.contributeurs = contributeurs;
    this.owner = owner; // Object {label: wiki:}
    this.category = category;
    this.path = path; // Array
    this.priority = priority; // Int
  }

  // Getters
  static getString(value) { return ((value != null) ? value : ''); }
  static getArray(value) { return ((value != null) ? value : []); }
  static getInt(value) { return ((value != null) ? value : 1); }

  getLongDesc() {
    return this.longDesc;
    // switch (this.longDesc.type) {
    //   case 'markdown':
    //     return 'Not implemented yet';
    //   case 'String':
    //     return this.longDesc.content;
    //   default:
    //     return '?';
    // }
  }
  getShortName() { return this.constructor.getString(this.shortName); }
  getShortDesc() { return this.constructor.getString(this.shortDesc); }
  getLongName() { return this.constructor.getString(this.longName); }
  getContributeurs() { return this.constructor.getString(this.contributeurs); }
  getCategory() { return this.constructor.getString(this.shortName); }
  getOwnerLabel() { return this.constructor.getString(this.owner.label); }
  getOwner() { return this.owner; }
  getOwnerWiki() { return this.constructor.getString(this.owner.wiki); }
  getPaths() { return this.constructor.getArray(this.path); }
  getPriority() { return this.constructor.getInt(this.priority); }
}
