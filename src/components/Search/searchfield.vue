<template>
  <div>
    <label><font-awesome-icon :icon="searchIcon()"/></label>
    <input
      v-model="search"
      class=""
      type="text"
      placeholder="Rechercher..."
      aria-label="Rechercher..."
      @focus="setFocusOn"
      @blur="setFocusOff"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";

label {
  color: $COLOR-WHITE;
  transition: 0.3s ease all;
  &:hover {
    color: $COLOR-WHITE;
  }
}

input {
  border-color: transparent;
  transition: 0.3s ease all;
  background-color: transparent;
  color: $COLOR-WHITE;

  &::placeholder {
    color: $COLOR-WHITE;
  }
  &:focus {
    outline: 0;
    border-bottom: 1px solid $COLOR-WHITE;
  }
}
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import {
  ACTION_SET_SEARCH_RESULT,
  SET_FOCUS_ON,
  SET_FOCUS_OFF
} from '@/store/mutation-types';
import SearchService from './service/search_service';

export default {
  name: 'SearchBar',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      search: null, // Search input content,
      inputField: '',
      searchIcon() { return faSearch; }
    };
  },
  computed: {
    dataSearch() { return this.$store.getters.getSearchResult(); }
  },
  watch: {
    search(value) {
      this.inputField = value;
      this.searchELS(value);
    }
  },
  methods: {
    searchELS(content) {
      this.$store.dispatch(ACTION_SET_SEARCH_RESULT, SearchService.search(content));
    },
    setFocusOn() {
      this.searchELS(this.inputField);
      this.$store.commit(SET_FOCUS_ON);
    },
    setFocusOff() {
      setTimeout(() => { this.$store.commit(SET_FOCUS_OFF); }, 300);
    }
  }
};
</script>
