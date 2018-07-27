import connector from '@/config/connectors/';

export default class searchService {
  /*
   * Search service
   * @params:
   *   @searchEndpt: Endpoint for the searchEndpt.
   */
  constructor(searchEndpt) {
    this.searchEndpt = searchEndpt;
  }

  static search(content) {
    /*
     * Search by content.
     */
    return connector.search(content);
  }
}
