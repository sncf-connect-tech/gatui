<template>
  <div class="api-nav-bar">
    <div class="nav-elm-container">
      <div
        v-if="theme.showLogo"
        class="api-svg">
        <router-link :to="{name: 'Home'}">
          <img
            src="@/assets/Gatui.png"/>
        </router-link>
      </div>
    </div>
    <div class="nav-elm-container">
      <menu-top />
    </div>
    <div class="sperator-flex">
    </div>
    <div
      v-if="theme.showSearch && searchActivated"
      class="nav-elm-container right-side">
      <search-field />
    </div>
    <div
      v-if="theme.showFeedback"
      class="nav-elm-container right-side">
      <btn-feedback />
    </div>
    <search-result />
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";

$break-small: 50px;

.api-nav-bar {
  display: inline-flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.5em;
  box-shadow: 0 1px 18px rgba(0,0,0,.25);
  z-index: 100;
  background-color: $COLOR_PRIMARY;
  & .api-svg {
    margin-right: 20px;
    padding-top: 3px;
    & img {
      height: 1.7rem;
    }
  }
  & .sperator-flex {
    z-index: -2;
    flex-grow: 1;
  }
  & .right-side {
    margin-right: 30px;
  }
  & .nav-elm-container {
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding-left: 20px;
    @media screen and (max-width: $break-small) {
      display: none;
    }
  }
  & .api-logo {
    display: inline-block;
    position: absolute;
    width: 100%;
    font-size: 1em;
    text-align: center;
    top: 8px;
    transition: transform .2s ease 50ms;
    z-index: -1;
  }
}
</style>

<script>
import connector from '@/config/connectors/';
import { theme } from '@/config/Application.conf';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import BtnFeedback from '@/components/FeedbackBtn/';
import MenuTop from '@/components/Menu/';

import searchField from '@/components/Search/searchfield.vue';
import searchResult from '@/components/Search/searchresults.vue';

export default {
  name: 'NavigationBar',
  components: {
    FontAwesomeIcon,
    searchField,
    searchResult,
    BtnFeedback,
    MenuTop
  },
  data() {
    return {
      theme,
      searchActivated: connector.isSearchActivated
    };
  },
  computed: {
    dataApi() { return this.$store.getters.getApiData; }
  }
};
</script>
