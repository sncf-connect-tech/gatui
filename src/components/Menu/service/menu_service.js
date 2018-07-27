import connector from '@/config/connectors/';
import { menuJson } from '@/config/Application.conf';

export default class MenuService {
  /*
   * Md Loader service
   * @params:
   *   @projectByName: Endpoint for the projectByName.
   */
  constructor({ documentById }) {
    this.documentById = documentById;
  }

  static getConfigurationMenu() {
    /*
     * Get Project data by id.
     */
    return connector.getDocument(menuJson);
  }
}
