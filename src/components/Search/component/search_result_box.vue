<template>
  <div class="search-result-box-container">
    <div v-if="dataSearch.type === 'metas'">
      <router-link
        :to="{name: 'Docs', params: {apiId: dataSearch.data.getShortName() }}"
        @click="resetSearch()">
        <div class="hight-row">
          <span class="title typo-body">{{ dataSearch.data.getShortName() }}</span>
          <!-- <span class="path typo-body">{{ dataSearch.data.getPaths()[0] }}</span> -->
        </div>
        <div class="hight-row">
          <span class="owner typo-body">{{ dataSearch.data.getOwnerLabel() }}</span>
        </div>
        <span class="typo-body">
          {{ getDesc(dataSearch) }}
        </span>
      </router-link>
    </div>

    <div v-if="dataSearch.type === 'markdown'">
      <router-link
        :to="{name: 'Docs', params: {apiId: dataSearch.data.location }}"
        @click="resetSearch()">
        <div class="hight-row">
          <span class="title typo-body">{{ dataSearch.data.location }}</span>
          <!-- <span class="path typo-body">{{ dataSearch.data.path }}</span> -->
        </div>
        <div class="hight-row">
          <span class="owner typo-body">{{ dataSearch.data.owner }}</span>
        </div>
        <div class="typo-body markdown-content">
          <mark-down-loader :md-data="{ type: 'markdown', path: dataSearch.data.path }" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.typo-body
  font-size: rem(14px)
  line-height: rem(20px)
  font-family: $FONT-STANDARD
  font-weight: normal

.search-result-box-container
  border: 1px solid $COLOR-GREY-LIGHT
  transition: ease 0.3s all
  padding: 4px
  & .hight-row
    justify-content: space-between
    display: flex
  & .title
    font-size: 1rem
    color: $COLOR-PRIMARY
  & .path
    font-style: italic
    color: $COLOR-GREY
  & .owner
    font-size: 0.7rem
    line-height: 0.7rem
    color: $COLOR-GREY
  & a
    text-decoration: none
    color: $COLOR-BLACK
  .markdown-content
    max-height: 50px
    overflow: hidden

.search-result-box-container:hover
  border: 1px solid $COLOR-SECONDARY
  cursor: pointer
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { RESET_SEARCH_RESULT } from '@/store/mutation-types';
import MarkDownLoader from '@/components/MarkdownLoader/';

export default {
  name: 'SearchResultBoxOne',
  components: {
    FontAwesomeIcon,
    MarkDownLoader
  },
  props: {
    dataSearch: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    getDesc(dataTemp) {
      if (dataTemp.data.getLongDesc().type !== 'markdown') {
        if (dataTemp.data.getLongDesc().content.length > 80) {
          return `${dataTemp.data.getLongDesc().content.slice(0, 80)}...`;
        }
        return dataTemp.data.getLongDesc().content;
      }
      return '';
    },
    resetSearch() {
      this.$store.commit(RESET_SEARCH_RESULT);
    }
  }
};
</script>
