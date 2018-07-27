/*
 * Store to keep data for apis.
 */
import { debugLog } from '@/utils/debug';
import VersionModel from '@/models/versionModel/versionModel';
import connector from '@/config/connectors/';

import {
  ACTION_INIT_DATA,
  SET_TTL,
  SET_RAW_DATA_PROJECTS,
  SET_DATA_PROJECTS,
  SET_ACTIVE_VERSION,
  ACTION_SET_PROJECT,
  SET_API_ID,
  SET_API_DATA_PROJECT,
  D_SET_PROMISE_DATA,
  ACTION_GET_VERSIONS_AVAILABLE
} from '../mutation-types';

const state = {
  rawData: null, // Promise stored here
  data: [], // Data from promise here
  description: [], // Description for home
  activeVersion: { projetName: 'none', version: '' },
  apiData: {}, // Data per project
  d_promiseData: null,
  ttl: 0
};

const getters = {
  getTTL: x => x.ttl,
  getRawData: x => x.rawData,
  getDescription: x => x.description,
  getData: x => x.data,
  getActiveVersion: x => x.apiData,
  getVersionsAvailable: (x) => {
    const { versions, version } = x.apiData;
    const result = [];
    if (versions !== undefined) {
      versions.map((y) => {
        if (y !== version) {
          result.push(y);
        }
        return y;
      });
      return result;
    }
    return [];
  }
};

const actions = {
  [ACTION_INIT_DATA](context) {
    /*
     * Initialise data for projects.
     */
    if (context.state.rawData === null || (context.state.ttl < Date.now())) {
      // Fire the download
      context.commit(SET_RAW_DATA_PROJECTS, {});
      context.commit(SET_TTL, Date.now() + 300000);
      const promise = new Promise((resolve) => {
        const rawData = connector.getProjects()
          .then((data) => {
            context.commit(SET_DATA_PROJECTS, data);
            resolve();
          });
        context.commit(SET_RAW_DATA_PROJECTS, rawData);
      });
      context.commit(D_SET_PROMISE_DATA, promise);
    }
    return context.state.d_promiseData;
  },
  [ACTION_SET_PROJECT](context, payload) {
    context.state.d_promiseData.then(() => {
      // To check if data are loaded
      if (context.state.apiId === payload) { return false; }
      context.commit(SET_API_ID, payload);
      const { data } = context.state;
      const { version, projetName } = context.state.activeVersion;

      const [result] = data.filter((x) => {
        const selection = x.projects
          .filter(e => e.project.getShortName() === projetName);
        return selection.length > 0;
      });

      const getfilteredResult = (versionModel, ver) => {
        const [filteredResult] = versionModel.projects
          .filter(y => y.version === ver);
        filteredResult.versions = versionModel.versions;
        return filteredResult;
      };

      if (version === '') {
        context.commit(SET_API_DATA_PROJECT, getfilteredResult(result, result.lastVersion));
        return true;
      }
      context.commit(SET_API_DATA_PROJECT, getfilteredResult(result, version));
      return true;
    }).catch(err => debugLog(err));
    return true;
  },
  [ACTION_GET_VERSIONS_AVAILABLE](context) {
    const { versions, version } = context.state.apiData;
    const result = [];
    versions.map((x) => {
      if (x !== version) {
        result.push(x);
      }
      return x;
    });
    return result;
  }
};

const mutations = {
  [SET_TTL](localState, payload) {
    localState.ttl = payload;
  },
  [SET_RAW_DATA_PROJECTS](localState, payload) {
    localState.rawData = payload;
  },
  [SET_DATA_PROJECTS](localState, payload) {
    /* eslint-disable */
    function groupBy(xs, key) {
      const re = /(.*?)-(v(.*))/gm;
      return xs.reduce((rv, x) => {
        const data = x['source']['extra']['projetName'];
        const result = /(.*?)-(v(.*))/gm.exec(data);
        const prepData = (result === null) ? data : result[1];
        (rv[prepData] = rv[prepData] || []).push(x);
        return rv;
      }, {});
    }
    /* eslint-enable */

    const grouped = groupBy(payload, 'source');

    // Group by name
    localState.data = Object.values(grouped).map(x => new VersionModel(x));
    localState.description = localState.data.map((x) => {
      const lastVersion = x.getLastVersion().project;
      const result = {
        source: {
          globalInfos: lastVersion.getGlobal(),
          url: lastVersion.getUrl()
        },
        version: x.getLastVersionStr()
      };
      return result;
    });
  },
  [SET_ACTIVE_VERSION](localState, payload) {
    // Put active version into variable
    if (localState.activeVersion !== {}) {
      const result = parseInt(payload, 10);
      // eslint-disable-next-line
      const test = isNaN(result);
      localState.activeVersion.version = (test ? payload : result);
    }
  },
  [SET_API_DATA_PROJECT](localState, payload) {
    localState.apiData = payload;
  },
  [SET_API_ID](localState, payload) {
    localState.activeVersion.projetName = payload;
  },
  [D_SET_PROMISE_DATA](localState, payload) {
    localState.d_promiseData = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
