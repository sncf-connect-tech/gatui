<template>
  <div>
    <div class="docuBtn-line gatui-u-typo-h3">
      <p><a :href="link">
        <span
          class="docuBtn-line-icon">
          <font-awesome-icon :icon="getIcon(type)" />
        </span>
        <span
          class="docuBtn-line-title"
          @click="clickAction = !clickAction">
          {{ title }}
          <span v-if="type === 'string'">:</span>
        </span>
        <span class="docuBtn-line-content">
          <!-- {{ content }} -->
        </span>
      </a></p>
    </div>
    <div>
      <!-- DocButton si directory
      MarkdownLoader si markdown -->
      <div>
        <mark-down-loader
          v-if="type === 'markdown' && clickAction"
          :md-data="{ type: 'markdown', path: content }"
          :class="`contentDocu ${activeStyle}`"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"
@import "./boxDrawing.scss"

.docuBtn-line
  padding-left: 30px
  font-size: smaller
  line-height: 1rem

.docuBtn-line-icon
  margin-right: 5px
  transition: all 0.2s ease

.docuBtn-line-content
  padding-left: 5px
  color: $COLOR-PRIMARY
  transition: all 0.2s ease
  font-style: italic
  font-size: small

.docuBtn-line-content:hover
  color: $COLOR-SECONDARY

.docuBtn-line:hover
  .docuBtn-line-icon
    color: $COLOR-SECONDARY
  cursor: pointer

a
  text-decoration: none
  color: $COLOR-BLACK
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faStickyNote from '@fortawesome/fontawesome-free-solid/faStickyNote';
import faFolder from '@fortawesome/fontawesome-free-solid/faFolder';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import MarkDownLoader from '@/components/MarkdownLoader/';

export default {
  name: 'DocButton',
  components: {
    FontAwesomeIcon,
    faStickyNote,
    faFolder,
    faLink,
    MarkDownLoader
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    content: {
      type: String,
      required: false,
      default: null
    },
    icon: {
      type: Object,
      required: false,
      default: () => {}
    },
    link: {
      type: String,
      required: false,
      default: null
    },
    type: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      clickAction: false,
      activeStyle: ''
    };
  },
  computed: {
    noteIcon() { return faStickyNote; },
    folderIcon() { return faFolder; },
    linkIcon() { return faLink; }
  },
  watch: {
    clickAction() {
      setTimeout(() => {
        if (this.clickAction) {
          this.activeStyle = 'contentDocu-active';
        } else {
          this.activeStyle = 'contentDocu-no-active';
        }
      }, 10);
    }
  },
  methods: {
    getIcon(type) {
      switch (type) {
        case 'url':
          return this.linkIcon;
        case 'directory':
          return this.folderIcon;
        case 'markdown':
          return this.noteIcon;
        default:
          return this.noteIcon;
      }
    }
  }
};
</script>
