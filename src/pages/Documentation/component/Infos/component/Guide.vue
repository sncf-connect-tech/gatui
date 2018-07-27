<template>
  <div class="guide-container">
    <div class="left-panel">
      <md-menu
        :array-label="documents"
        :array-url="urls"
        @load="loadMd"
      />
    </div>
    <div class="right-panel">
      <div class="right-content">
        <div class="title-panel">
          <!-- <span class="title-font">Apis Title</span> -->
          <h1>{{ dataProject.getLongName() }}</h1>
        </div>
        <div class="markdown-content">
          <div class="markdown-center">
            <mark-down-loader
              v-if="path !== null"
              :md-data="_s_document"
            />
          </div>
        </div>
        <!-- <div class="bottom-arrows">
          <div class="arrows-center">
            <div class="left-arrow">
              <font-awesome-icon :icon="_i_arrowleft" />
              <span class="text-arrow"> Getting Started</span>
            </div>
            <div class="right-arrow">
              <span class="text-arrow">Description </span>
              <font-awesome-icon :icon="_i_arrowright" />
            </div>
          </div>
        </div> -->
        <footerbar />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.guide-container
  display: inline-block
  width: 100%
  margin-top: 10px
  height: calc(100% - 50px)
  & .left-panel
    display: inline-block
    vertical-align: top
    width: 20%
    max-width: 300px
    height: 100%
    padding-left: 30px
    padding-top: 50px
    border-right: 1px solid #C4C4C4
    @media screen and (max-width: 700px)
     display: none
  & .right-panel
    overflow-y: scroll
    position: relative
    display: inline-block
    vertical-align: top
    width: 79%
    height: 100%
    @media screen and (max-width: 700px)
      width: 100%
    @media screen and (min-width: 300px*80px/20px) // cross product
      width: calc(100% - 305px)
    & .content-panel
      dispaly: flex
      justify-content: center
    & .title-panel
      text-align: center
    & .markdown-content
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      padding: 80px
      padding-top: 0
      & .markdown-center
        max-width: 1200px
.bottom-arrows
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 20px
  letter-spacing: -0.0461538px
  position: relative
  width: 100%
  display: flex
  justify-content: center
  color: #757575
  & .arrows-center
    max-width: 1200px
  & .text-arrow
    color: $COLOR-PRIMARY
  & .left-arrow
    display: inline-block
    position: absolute
    left: 80px
    transition: 0.2s all ease-in
    &:hover
      color: $COLOR-SECONDARY
      cursor: pointer
  & .right-arrow
    display: inline-block
    position: absolute
    right: 80px
    transition: 0.2s all ease-in
    &:hover
      color: $COLOR-SECONDARY
      cursor: pointer

</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import Footerbar from '@/components/Footer/';
import MarkDownLoader from '@/components/MarkdownLoader/';

import MdMenu from './Guide/MdMenu.vue';

export default {
  name: 'Guide',
  components: {
    FontAwesomeIcon,
    Footerbar,
    MarkDownLoader,
    MdMenu
  },
  props: {
  },
  data() {
    return {
      activeDocument: 0
    };
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    },
    documents() { return this.$store.getters.getActiveVersion.project.documentation.docs.filter(x => x.type === 'markdown'); },
    urls() { return this.$store.getters.getActiveVersion.project.documentation.docs.filter(x => x.type === 'url'); },
    path() {
      if (this.activeDocument !== null && this.activeDocument < this.documents.length) {
        return this.documents[this.activeDocument];
      }
      return null;
    },
    _s_document() {
      if (this.path !== null) {
        return this.path;
      }
      return { path: '', type: 'markdown', label: '' };
    },
    _i_arrowleft() { return faArrowLeft; },
    _i_arrowright() { return faArrowRight; }
    // _w_status() { return wording.badges.status; },
    // _w_owner() { return wording.badges.owner; },
    // _p_title() { return this.dataProject.getLongName(); },
    // _p_desc() { return this.dataProject.getShortDesc(); }
  },
  methods: {
    loadMd(index) {
      if (this.documents.length > index) { this.activeDocument = index; return index; }
      return -1;
    }
  }
};
</script>
