import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import menu from './modules/menu';
import dataProjects from './modules/dataProjects';
import projectBar from './modules/projectBar';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    search,
    menu,
    dataProjects,
    projectBar
  },
  strict: debug
});
