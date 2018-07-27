/*
 * @title: File
 */

import data from './Data/';

const req = require.context(
  'raw-loader!./Data',
  true,
  /^\.\/.*\.md$/
);

export const getDocument = (path) => {
  const regex = /^module.exports(.*?)"(.*)"$/;
  return new Promise((resolve, reject) => {
    if (!req.keys().includes(path)) { reject(); }
    const document = req(path).match(regex);
    let result = '';
    if (document.length === 3) {
      result = document[2].replace(/(\\r\\n|\\r|\\n)/gm, '\n');
      const str = [{ source: { content: result } }];
      resolve(str);
    } else {
      reject();
    }
  });
};

export const getProjects = () =>
  new Promise((resolve) => {
    resolve(data.map(x => ({ source: x })));
  });

export const getProject = () => {
  // Useless ? hum
};

export const isSearchActivated = false;
export const search = () =>
  new Promise((resolve) => {
    resolve(['blbl']);
  });
