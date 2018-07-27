export default class ApiButton {
  constructor({
    name,
    shortDesc,
    longDesc,
    urlSwagger,
    domaine,
    priority,
    position,
    version,
    description
  }) {
    this.shortName = name;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.urlSwagger = urlSwagger;
    this.domaine = domaine;
    this.position = position;
    this.description = description;
    this.priority = ((priority != null) ? priority : 1);
    this.version = ((version != null) ? version : 1);
  }
}
