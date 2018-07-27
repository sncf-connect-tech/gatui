<template>
  <div class="desc-container">
    <div
      v-if="dataProject.getUrl() !== null"
      class="btn-centers"
    >
      <!-- Links -->
      <quick-link
        v-for="item in dataProject.getUrl()"
        :link="item.url"
        :key="`quicklinks-links-${item.label}`"
        :title="item.label"
      />
    </div>
  </div>
</template>

<style lang="sass">
@import "config/configApp.var"

.desc-container
  display: flex
  width: 100%
  justify-content: center
  margin-bottom: 30px
  & .btn-centers
    display: flex
    flex-wrap: wrap
    width: 100%
    justify-content: center
    padding-right: 30px
    padding-left: 30px
</style>

<script>
import QuickLink from './components/quicklink-link.vue';

export default {
  name: 'QuickLinks',
  components: {
    QuickLink
  },
  props: {
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    }
  }
};
</script>
