/*
 * Search engine
 */
import ProjectModel from '@/models/metasModel/project';
import { debugLog } from '@/utils/debug';

// Index names
import {
  indexMetas,
  indexMd,
  environnement
} from '@/config/Application.conf';

// Mutation
import {
  SET_SEARCH_RESULT,
  RESET_SEARCH_RESULT,
  ACTION_SET_SEARCH_RESULT,
  SET_FOCUS_ON,
  SET_FOCUS_OFF
} from '../mutation-types';

const state = {
  searchResult: null,
  focus: false
};

const getters = {
  getSearchResult: x => x.searchResult,
  getSearchFocus: x => x.focus
};

const actions = {
  [ACTION_SET_SEARCH_RESULT](context, payload) {
    payload.then((data) => {
      debugLog(data);
      context.commit(SET_SEARCH_RESULT, data);
    }).catch(err => debugLog(err));
  }
};

const mutations = {
  /**
   * Set search result
   *
   * @param payload
   */
  [SET_SEARCH_RESULT](localState, payload) {
    if (payload.length === 0) {
      localState.searchResult = null;
    } else {
      // eslint-disable-next-line
      const metasArray = payload
        .filter(e => environnement.map(x => `${indexMetas}_${x}`).includes(e.index))
        .map(e => ({ data: new ProjectModel(e.source), score: e.score, type: 'metas' }));
      const documentsArray = payload
        .filter(e => environnement.map(x => `${indexMd}_${x}`).includes(e.index)) // TO CHANGE
        .map(e => ({ data: e.source, score: e.score, type: 'markdown' }));
      localState.searchResult = [...metasArray, ...documentsArray]
        .sort((a, b) => (a.score <= b.score));
    }
  },
  /**
   * Reset search result
   *
   */
  [RESET_SEARCH_RESULT](localState) {
    // eslint-disable-next-line
    localState.searchResult = null;
  },
  /**
   * Set Focus on
   *
   */
  [SET_FOCUS_ON](localState) {
    // eslint-disable-next-line
    localState.focus = true;
  },
  /**
   * Set Focus off
   *
   */
  [SET_FOCUS_OFF](localState) {
    // eslint-disable-next-line
    localState.focus = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
