<template>
  <div>
    <navbar :home="true" />
    <div class="content">
      <background />
      <div class="dashboard">
        <div class="domain-content">
          <boxhome
            v-for="item in getDescription"
            :key="`btnbox-${item[0].domaine}`"
            :titre="item[0].domaine"
            :description="item[0].description"
            :array-data="item"
          />
        </div>
        <footerbar />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
::-webkit-scrollbar
  width: 10px

::-webkit-scrollbar-track
  background: #f1f1f1

::webkit-scrollbar-thumb
  background: #888

::webkit-scrollbar-thum:hover
  background: #555

.dashboard
  position: absolute
  top: 40px
  left: 0
  width: 100%
  height: calc(100% - 40px)
  padding-top: 60px

.domain-content
  display: flex
  flex-direction: column
  text-align: center
  justify-content: center
  align-items: center
</style>

<script>
import Background from '@/components/Background/Background.vue';
import { position } from '@/config/Application.conf';
import Navbar from '@/components/NavigationBar/';
import Footerbar from '@/components/Footer/';
import { SET_PROJECT_OVERVIEW } from '@/store/mutation-types';
import Boxhome from './component/box-home.vue';
import ApiButton from './models/api_button';
import groupBy from './utils/groupBy';

function populateApiButton(data) {
  return data.map(x => new ApiButton({
    name: x.source.globalInfos.shortName,
    shortDesc: x.source.globalInfos.shortDesc,
    longDesc: x.source.globalInfos.longDesc,
    urlSwagger: x.source.url.swagger,
    domaine: position(x.source.globalInfos.category).name,
    position: position(x.source.globalInfos.category).position,
    description: position(x.source.globalInfos.category).description,
    priority: x.source.globalInfos.priority,
    version: x.version
  }));
}

function sortByCategory(data) {
  return groupBy(data, 'domaine');
}

export default {
  name: 'Home',
  components: {
    Navbar,
    Boxhome,
    Footerbar,
    Background
  },
  data() {
    return {
    };
  },
  computed: {
    getDescription() {
      const data = this.$store.getters.getDescription;
      const dataBtn = populateApiButton(data);
      let result = Object.values(sortByCategory(dataBtn)); // Data grouped
      result = result.map(group => group.sort((a, b) => {
        if (a.priority > b.priority) { return 1; }
        if (a.priority < b.priority) { return -1; }
        if (a.shortName[0] > b.shortName[0]) { return 1; }
        if (a.shortName[0] < b.shortName[0]) { return -1; }
        return 0;
      })).sort((a, b) => {
        if (a[0].position > b[0].position) { return 1; }
        if (a[0].position < b[0].position) { return -1; }
        return 0;
      });
      return result;
    }
  },
  beforeDestroy() {
    this.$store.commit(SET_PROJECT_OVERVIEW);
  }
};
</script>
