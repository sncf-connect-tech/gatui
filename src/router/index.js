import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Documentation from '@/pages/Documentation/Docs.vue';
import MdPage from '@/pages/MarkdownPage/MarkdownPage.vue';
import NotFound from '@/pages/404_NotFound/';
import GetStarted from '@/pages/GetStarted';
import Store from '@/store/';
import { debugLog } from '@/utils/debug';

import {
  RESET_SEARCH_RESULT,
  ACTION_INIT_DATA,
  ACTION_SET_PROJECT,
  SET_ACTIVE_VERSION
} from '@/store/mutation-types';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'GetStarted',
      component: GetStarted
    },
    {
      path: '/apis',
      name: 'Home',
      component: Home
    },
    {
      path: '/api/:apiId',
      name: 'Docs',
      component: Documentation
    },
    {
      path: '/md-page/:path',
      name: 'MdPage',
      component: MdPage
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

router.onReady(() => {
  // Reset Search result
  router.beforeEach((to, from, next) => {
    Store.commit(RESET_SEARCH_RESULT);
    Store.commit(SET_ACTIVE_VERSION, '');
    Store.dispatch(ACTION_SET_PROJECT, to.params.apiId);
    next();
  });
});

Vue.mixin({
  beforeMount() {
    Store.dispatch(ACTION_INIT_DATA).catch(err => debugLog(err));
  }
});

export default router;
