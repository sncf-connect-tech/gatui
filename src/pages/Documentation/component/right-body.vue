<template>
  <div class="api-right-body">
    <infos
      v-if="dataProject != undefined"
    />
    <!-- <footerbar /> -->
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";

.api-right-body {
  position: absolute;
  top: 30px;
  left: 0px;
  width: 100%;
  height: calc(100% - 35px);
  box-sizing: border-box;
  border-top: 1px solid $COLOR-GREY-LIGHT;
  transition: 1s;
  overflow: hidden
}
</style>

<script>
import Footerbar from '@/components/Footer/';
import Infos from './Infos/Infos.vue';

export default {
  name: 'RightBody',
  components: {
    Infos,
    Footerbar
  },
  computed: {
    dataProject() {
      if (this.$store.getters.getActiveVersion !== null) {
        return this.$store.getters.getActiveVersion.project;
      }
      return undefined;
    }
  }
};
</script>
