<template>
  <div class="description-container">
    <mark-down-loader :md-data="dataProject.getLongDesc()" />
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

</style>

<script>
import MarkDownLoader from '@/components/MarkdownLoader/';

export default {
  name: 'Description',
  components: {
    MarkDownLoader
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
