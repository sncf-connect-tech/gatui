<template>
  <div class="infos-body">
    <project-bar />
    <div class="select-version">
      <select
        v-model="selected"
        @change="setProjetVersion(selected)"
      >
        <option
          :value="'actual'"
          selected
        >{{ _w_version }} v{{ dataRaw.version }}</option>
        <option
          v-for="item in getVersionsAvailable"
          :key="item"
          :value="item"
        >{{ _w_version }} v{{ item }}</option>
      </select>
    </div>

    <guide
      v-if="_s_projectBarState === 'guide'"
    />
    <reference
      v-if="_s_projectBarState === 'reference'"
    />
    <overview
      v-if="_s_projectBarState === 'overview'"
    />

    <!-- <div
      v-if="dataProject != undefined && dataProject.getGlobal()"
      class="content-body"
    >
    </div> -->
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"
@import "./assets/styles/mixins"

.infos-body
  position: relative
  height: 100%
  width: 100%

.select-version
  position: absolute
  top: 20px
  right: 40px
  outline: 0

  & select
    padding: 5px
    border-color: transparent
    border-bottom: 2px solid $COLOR-PRIMARY
    height: 30px
    outline: 0
    -moz-appearance: none

.title-container
  margin-bottom: -55px
  width: 100%

.infos-title
  padding-top: 1em
  color: $COLOR-PRIMARY
  text-align: center

.container-contrib-status
  display: flex
  align-items: flex-start
  max-width: 1200px
  margin: auto

.right-body-infos
  padding: 20px
  padding-left: 80px
  padding-right: 80px
  max-width: 1200px
  margin: auto

.content-body
  position: relative
  top: 50px
  overflow-x: hidden // little hack, to do: resolve this;
  margin: auto

.desc-box
  max-width: 1200px
  margin: auto
  margin-top: 30px
  margin-bottom: 30px
  display: flex

.desc-logo-text
  text-align: center
  margin-right: 20px
  a
    position: relative
    top: 10px
    color: #545454
    font-style: italic
    text-decoration: none
    transition: all .3s ease
  a:hover
    color: $COLOR-SECONDARY

.desc-logo
  @include circle(88px, $COLOR-PRIMARY)
  border: 1px solid $COLOR-SECONDARY
  margin-right: 40px
  margin-left: 20px
  margin-top: 40px
  color: white
  text-align: center
  transition: all .3s ease
  p
    position: relative
    top: -30px
    font-family: "Times New Roman", Times, serif
    font-size: xx-large
    transition: all .3s ease
  a
    position: relative
    top: 10px
    color: #545454
    font-style: italic
    text-decoration: none
    transition: all .3s ease
  a:hover
    color: $COLOR-SECONDARY

.desc-logo:hover
  background-color: $COLOR-SECONDARY
  p
    @include rotation(360deg)

.desc-text
  p
    font-style: italic
  h3
    color: #454545
    font-weight: 500
  h4
    color: #545454
    font-weight: 600
    .desc-consumers
      color: red

.gatui-message
  max-width: 1200px
  margin: auto
</style>

<script>
import {
  SET_ACTIVE_VERSION,
  ACTION_SET_PROJECT
} from '@/store/mutation-types';

import { debugLog } from '@/utils/debug';
import { wording } from '@/config/Application.conf';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Footerbar from '@/components/Footer/';

import ProjectBar from './component/ProjectBar.vue';
import Overview from './component/Overview.vue';
import Guide from './component/Guide.vue';
import Reference from './component/Reference.vue';

export default {
  name: 'Infos',
  components: {
    ProjectBar,
    Overview,
    Guide,
    Reference,
    Footerbar,
    FontAwesomeIcon
  },
  props: {
  },
  data() {
    return {
      randomHeader: new Array(10),
      randomPos: [],
      randomWidth: [],
      selected: 'actual',
      versions: []
    };
  },
  computed: {
    dataProject() {
      if (this.$store.getters.getActiveVersion !== null) {
        return this.$store.getters.getActiveVersion.project;
      }
      return undefined;
    },
    dataRaw() {
      if (this.$store.getters.getActiveVersion !== null) {
        return this.$store.getters.getActiveVersion;
      }
      return undefined;
    },
    getVersionsAvailable() {
      return this.$store.getters.getVersionsAvailable;
    },
    firstLetter() {
      return this.dataProject.getOwnerLabel()[0];
    },
    _w_version() { return wording.generalCode.version; },
    _p_longName() { return this.dataProject.getLongName(); },
    _p_shortDesc() { return this.dataProject.getShortDesc(); },
    _s_projectBarState() { return this.$store.getters.getprojectbarstate; }
  },
  mounted() {
  },
  methods: {
    setProjetVersion(version) {
      this.$store.commit(SET_ACTIVE_VERSION, version);
      this.selected = 'actual';
      this.$store
        .dispatch(ACTION_SET_PROJECT, this.$route.params.apiId)
        .then(() => {
          this.getVersionsAvailable();
        })
        .catch(err => debugLog(err));
    }
  }
};
</script>
