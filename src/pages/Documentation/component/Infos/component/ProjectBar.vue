<template>
  <div class="project-bar">
    <div class="btns-menu">
      <button
        :class="`btn-menu ${classActive('overview')}`"
        @click="stateOverview"
      >
        {{ _w_overview }}
      </button>
      <button
        :class="`btn-menu ${classActive('guide')}`"
        @click="stateGuide"
      >
        {{ _w_guide }}
      </button>
      <button
        v-if="dataProject.swagger != null"
        :class="`btn-menu ${classActive('reference')}`"
        @click="stateReference"
      >
        {{ _w_reference }}
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.project-bar
  display: flex
  position: relative
  background-color: white
  top: 10px
  width: 100%
  height: 40px
  border-bottom: 1px solid grey
  align-items: flex-end
  justify-content: center
  & .btns-menu
    display: flex
    align-items: center
    justify-content: space-between
    & .btn-menu
      background-color: transparent
      border: 0
      outline: 0
      font-family: $FONT-STANDARD
      font-style: normal
      font-weight: normal
      line-height: normal
      font-size: 22px
      letter-spacing: -0.0461538px
      color: #444444
      transition: 0.1s all ease-in
      margin-left: 10px
      margin-right: 10px
      &:hover
        color: $COLOR-PRIMARY
        cursor: pointer
    & .active
      color: $COLOR-PRIMARY
</style>

<script>
import { wording } from '@/config/Application.conf';

import {
  SET_PROJECT_OVERVIEW,
  SET_PROJECT_GUIDE,
  SET_PROJECT_REFERENCE
} from '@/store/mutation-types';

export default {
  name: 'ProjectBar',
  components: {
  },
  props: {
  },
  computed: {
    projectBarState() { return this.$store.getters.getprojectbarstate; },
    _w_overview() { return wording.projectBar.overview; },
    _w_guide() { return wording.projectBar.guide; },
    _w_reference() { return wording.projectBar.reference; },
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    }
  },
  methods: {
    stateOverview() { this.$store.commit(SET_PROJECT_OVERVIEW); },
    stateGuide() { this.$store.commit(SET_PROJECT_GUIDE); },
    stateReference() { this.$store.commit(SET_PROJECT_REFERENCE); },
    classActive(str) { return (this.projectBarState === str ? 'active' : ''); }
  }
};
</script>
