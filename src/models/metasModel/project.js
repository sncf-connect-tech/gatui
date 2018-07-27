import GlobalInfos from './globalInfos';
import DocumentationInfos from './documentation';
import StatusInfos from './statusInfos';
import Extra from './extra';

export default class ProjectModel {
  constructor({
    globalInfos,
    url,
    documentation,
    contacts,
    statusInfos,
    swagger,
    extra
  }) {
    if (globalInfos != null) { this.globalInfos = new GlobalInfos(globalInfos); }
    if (url != null) { this.url = url; }
    if (documentation != null) { this.documentation = new DocumentationInfos(documentation); }
    if (contacts != null) { this.contacts = contacts; }
    if (statusInfos != null) { this.statusInfos = new StatusInfos(statusInfos); }
    if (swagger != null) { this.swagger = swagger; }
    if (extra != null) { this.extra = new Extra(extra); }
  }

  // Getters

  // Check exist
  getGlobal() { return ((this.globalInfos != null) ? this.globalInfos : undefined); }
  getUrl() { return ((this.url != null) ? this.url : undefined); }
  getDocumentation() { return ((this.documentation != null) ? this.documentation : undefined); }
  getContacts() { return ((this.contacts != null) ? this.contacts : undefined); }
  getConfiguration() { return ((this.configuration != null) ? this.configuration : undefined); }
  getStatusInfos() { return ((this.statusInfos != null) ? this.statusInfos : undefined); }

  // GlobalInfos
  getLongName() { return this.globalInfos.getLongName(); }
  getShortName() { return this.globalInfos.getShortName(); }
  getShortDesc() { return this.globalInfos.getShortDesc(); }
  getLongDesc() { return this.globalInfos.getLongDesc(); }
  getContributeurs() { return this.globalInfos.getContributeurs(); }
  getCategory() { return this.globalInfos.getCategory(); }
  getOwnerLabel() { return this.globalInfos.getOwnerLabel(); }
  getOwnerWiki() { return this.globalInfos.getOwnerWiki(); }
  getOwner() { return this.globalInfos.getOwner(); }
  getPaths() { return this.globalInfos.getPaths(); }
  getPriority() { return this.globalInfos.getPriority(); }

  // Documentation
  getDocs() { return this.documentation.getDocs(); }

  // Status
  getStatus() { return this.statusInfos.getStatus(); }

  // Extra
  getTrigram() { return this.extra.getTrigram(); }
  getProjetName() { return this.extra.getProjetName(); }
}
