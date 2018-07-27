<template>
  <div>
    <div
      v-if="!loading"
      class="markdown"
      v-html="rawHtml">
    </div>
    <div
      v-if="loading"
      class="loader">
      <loader />
    </div>
  </div>
</template>

<style lang="sass">
@import "config/configApp.var"
@import "./style.css"

pre
  max-height: 300px
  white-space: pre-wrap
  white-space: -moz-pre-wrap
  white-space: -pre-wrap
  white-space: -o-pre-wrap
  word-wrap: break-word
  overflow: auto
  // color: white

li.L0, li.L1, li.L2, li.L3, li.L4, li.L5, li.L6, li.L7, li.L8
  list-style-type: decimal !important

.right-body-markdown
  padding: 10px
  padding-left: 30px

.markdown
  font-family: $FONT-STANDARD, AvenirRoman, AvenirBook, Arial, Helvetica, sans-serif

  h1
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.5rem
  h2
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.4rem
  h3
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.3rem
  h4
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.2rem
  h5
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.1rem
  h6
    color: $COLOR-SECONDARY
    font-weight: 500
    font-size: 1.1rem
  a
    color: $COLOR-SECONDARY
    text-decoration: none
  a:hover
    color: $COLOR-PRIMARY
  p
    font-weight: 500
    font-size: 1rem
</style>

<script>
import { debugLog } from '@/utils/debug';
import 'showdown-prettify';
import 'code-prettify';
import Loader from '@/components/Loader/';

import MarkdownLoader from '../service/markdownLoader_service';

const showdown = require('showdown');

const converter = new showdown.Converter({ extensions: ['prettify'] });
converter.setFlavor('vanilla');

export default {
  name: 'MarkdownLoader',
  components: {
    Loader
  },
  props: {
    mdData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      loading: true,
      htmlComp: ''
    };
  },
  computed: {
    rawHtml: {
      get() {
        return this.htmlComp;
      },
      set(newValue) {
        this.htmlComp = newValue;
      }
    }
  },
  watch: {
    mdData: function update() {
      this.loading = true;
      this.markdown();
    }
  },
  created() {
    this.markdown();
  },
  methods: {
    async markdown() {
      switch (this.mdData.type) {
        case 'String':
          this.rawHtml = this.mdData.content;
          this.loading = false;
          break;
        case 'markdown': {
          const { path } = this.mdData;
          const dataLoader = MarkdownLoader.getDocumentById(path);

          dataLoader
            .then(() => { this.loading = false; })
            .catch((err) => { debugLog(err); this.loading = true; });

          this.rawHtml = converter.makeHtml((await dataLoader)[0]
            .source
            .content);
          // eslint-disable-next-line
          PR.prettyPrint();
          break;
        }
        default:
          break;
      }
    }
  }
};
</script>
