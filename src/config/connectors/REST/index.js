/*
 * @title: Rest
 */

import axios from '@/lib/axios_utils';
import {
  allProjects,
  documentById,
  searchDocuments,
  getProjectByName
} from './rest-sample.conf';

function getResponseData(rawData) {
  return new Promise((resolve, reject) => {
    rawData
      .then(result => resolve(result.data))
      .catch(err => reject(err));
  });
}

export const getDocument = (id) => {
  /* export data from request */
  const rawData = axios.post(documentById, { id });

  return getResponseData(rawData);
};

export const getProjects = () => {
  /* export data from request */
  const rawData = axios.get(allProjects);
  return getResponseData(rawData);
};

export const getProject = (project) => {
  /* export data from request */
  const query = `${getProjectByName}`;
  const rawData = axios.post(query, { project });
  return getResponseData(rawData);
};

export const isSearchActivated = true;
export const search = (content) => {
  /* export data from request */
  const query = `${searchDocuments}`;
  const rawData = axios.post(query, { content });
  return getResponseData(rawData);
};
