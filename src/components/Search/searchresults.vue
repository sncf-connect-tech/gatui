<template>
  <div
    v-if="getSearchResult && getFocus"
    class="search-result-container">
    <div v-if="getSearchResult.length > 0">
      <search-result-box
        v-for="(item, index) in getSearchResult"
        :key="`resultSearch-${index}`"
        :data-search="item"/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.search-result-container
  background-color: $COLOR-WHITE
  position: absolute
  width: 700px
  right: 40px
  top: 40px
  border: 1px solid $COLOR-GREY-LIGHT
  @media screen and (max-width: 710px)
    width: 100%
    right: 0px
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import SearchResultBox from './component/search_result_box.vue';

export default {
  name: 'SearchResult',
  components: {
    FontAwesomeIcon,
    SearchResultBox
  },
  data() {
    return {
    };
  },
  computed: {
    getSearchResult() { return this.$store.getters.getSearchResult; },
    getFocus() { return this.$store.getters.getSearchFocus; }

  },
  watch: {
    search(value) {
      this.searchELS(value);
    }
  },
  methods: {
  }
};
</script>
