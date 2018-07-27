<template>
  <div>
    <navbar :home="true" />
    <div class="content">
      <Background />
      <div class="center-box">
        <Paper-box />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.center-box
  position: absolute
  top: 40px
  left: 0
  width: 100%
  height: calc(100% - 40px)
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
</style>

<script>
import Background from '@/components/Background/Background.vue';
import Navbar from '@/components/NavigationBar/';
import PaperBox from './component/PaperBox.vue';

export default {
  name: 'GetStarted',
  components: {
    Navbar,
    PaperBox,
    Background
  },
  data() {
    return {
    };
  },
  computed: {
  }
};
</script>
