/*
 * Configuration Menu.
 */
import { SET_MENUS_DATA } from '../mutation-types';

const state = {
  menusData: {}, // Les données du menu.
  menusKeys: [] // Les clés du menu.
};

const getters = {
  getMenusData: x => x.menusData,
  getMenusKeys: x => Object.keys(x.menusData).filter(y => y !== 'config')
};

const actions = {
};

const mutations = {
  /**
   * Set search result
   *
   * @param payload
   */
  [SET_MENUS_DATA](localState, payload) {
    localState.menusData = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
