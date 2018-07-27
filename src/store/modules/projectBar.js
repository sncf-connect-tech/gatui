/*
 * Store to keep data for projectdata bar.
 */
import {
  SET_PROJECT_OVERVIEW,
  SET_PROJECT_GUIDE,
  SET_PROJECT_REFERENCE
} from '../mutation-types';

const state = {
  actualState: 'overview'
};

const getters = {
  getprojectbarstate: x => x.actualState
};

const actions = {
};

const mutations = {
  [SET_PROJECT_OVERVIEW](localState) { localState.actualState = 'overview'; },
  [SET_PROJECT_GUIDE](localState) { localState.actualState = 'guide'; },
  [SET_PROJECT_REFERENCE](localState) { localState.actualState = 'reference'; }
};

export default {
  state,
  getters,
  actions,
  mutations
};
