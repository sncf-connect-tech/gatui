import ProjectModel from '@/models/metasModel/project';

const utils = {};

utils.getVersionFromStr = (str) => {
  /*
   * Format: project-name-vX
   */
  const re = /(.*?)-(v(.*))/gm;
  const result = re.exec(str);
  if (result && result.length >= 3) {
    return parseInt(result[3], 10);
  }
  return 1;
};

export default class VersionModel {
  constructor(arrayData) {
    this.projects = arrayData
      .map((x) => {
        const project = new ProjectModel(x.source);
        const result = {
          name: project.getProjetName(),
          project,
          version: utils.getVersionFromStr(project.getProjetName())
        };
        return result;
      });

    this.versions = this.projects.map(x => parseInt(x.version, 10));
    this.lastVersion = Math.max(...this.projects.map(x => x.version));
  }

  getVersions() { return this.versions; }

  getVersion(version) {
    const versions = this.getVersions();
    if (versions.includes(version)) {
      return this.projects.filter(x => x.version === version)[0];
    }
    return new ProjectModel({});
  }

  getLastVersionStr() { return this.lastVersion; }

  getLastVersion() { return this.getVersion(this.lastVersion); }
}
