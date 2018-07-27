<template>
  <div class="reference-container">
    <div id="swagger-ui"></div>
  </div>
</template>

<style lang="sass">
@import "./Reference/swagger-ui.css"

#swagger-ui
  height: 100%
  width: 100%
  padding-bottom: 50px

.reference-container
  height: 100%
  width: 100%
  overflow-y: scroll
</style>

<script>
import SwaggerUI from 'swagger-ui';

export default {
  name: 'Reference',
  components: {
  },
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    }
  },
  mounted() {
    if (this.dataProject.swagger != null) {
      if (this.dataProject.swagger.type === 'url') {
        SwaggerUI({
          url: this.dataProject.swagger.url,
          dom_id: '#swagger-ui'
        });
      } else {
        SwaggerUI({
          spec: JSON.parse(this.dataProject.swagger.spec),
          dom_id: '#swagger-ui'
        });
      }
    }
  }
};
</script>
