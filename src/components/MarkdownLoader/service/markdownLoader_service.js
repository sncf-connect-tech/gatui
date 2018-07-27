import connector from '@/config/connectors/';

export default class markDownLoaderService {
  /*
   * Md Loader service
   * @params:
   *   @projectByName: Endpoint for the projectByName.
   */
  constructor({ documentById }) {
    this.documentById = documentById;
  }

  static getDocumentById(id) {
    /*
     * Get Project data by id.
     */
    return connector.getDocument(id);
  }
}
