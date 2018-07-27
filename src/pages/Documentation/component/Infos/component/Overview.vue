<template>
  <div class="overview-container">
    <div class="header-title">
      <div class="title-head"> {{ _p_title }} </div>
      <div class="short-desc"> {{ _p_desc }} </div>
    </div>
    <div class="header-badges">
      <span
        class="status-head"
      >
        <span class="green-one"><font-awesome-icon :icon="_i_check" /></span>
        {{ _w_status }}:
        <span class="status-state green-one">{{ _p_status }}</span>
      </span>
      <span
        class="status-head"
      >
        <span class="red-one"><font-awesome-icon :icon="_i_heart" /></span>
        {{ _w_owner }}:
        <span class="status-state red-one">{{ _p_owner }}</span>
      </span>
    </div>
    <div class="g-container">
      <div class="g-min-container">
        <Description />
      </div>
    </div>
    <div class="g-container">
      <div class="g-min-container">
        <QuickLinks />
      </div>
    </div>
    <div class="g-container contact">
      <div class="g-min-container">
        <Contacts />
      </div>
    </div>
    <footerbar />
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.g-container
  width: 100%
  display: flex
  justify-content: center
  & .g-min-container
    max-width: 1400px
    width: 100%

.contact
  background: #EEEEEE

.overview-container
  margin-top: 10px
  width: 100%
  height: 100%
  overflow-y: scroll

.header-title
  padding-top: 30px
  width: 100%
  text-align: center
  font-family: $FONT-STANDARD
  font-style: normal
  line-height: normal
  letter-spacing: -0.0461538px
  color: #444444
  margin-bottom: 25px
  & .title-head
    margin-bottom: 10px
    font-weight: normal
    font-size: 33px
  & .short-desc
    font-weight: 500
    font-size: 26px

.header-badges
  font-family: $FONT-STANDARD
  width: 100%
  text-align: center
  margin-bottom: 30px
  & .status-head
    margin-left: 10px
    margin-right: 10px
    & .green-one
      color: #2CDB33
    & .red-one
      color: #E91E63

</style>

<script>
import { wording } from '@/config/Application.conf';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import Footerbar from '@/components/Footer/';

import Description from './Overview/Description.vue';
import QuickLinks from './Overview/QuickLinks.vue';
import Contacts from './Overview/Contacts.vue';

export default {
  name: 'Overview',
  components: {
    FontAwesomeIcon,
    Footerbar,
    Description,
    QuickLinks,
    Contacts
  },
  props: {
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    },
    _w_status() { return wording.badges.status; },
    _w_owner() { return wording.badges.owner; },
    _p_title() { return this.dataProject.getLongName(); },
    _p_desc() { return this.dataProject.getShortDesc(); },
    _p_status() { return this.dataProject.getStatus().status; },
    _p_owner() { return this.dataProject.getStatus().owner; },
    _i_heart() { return faHeart; },
    _i_check() { return faCheck; }
  }
};
</script>
