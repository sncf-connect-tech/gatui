<template>
  <div class="links">
    <a :href="link">
      <btn-orange :content="title" />
    </a>
  </div>
</template>

<style lang="sass">
@import "config/configApp.var"
.links
  padding: 5px 5px 5px 5px

.button
  margin: 5px 5px 5px 5px
</style>

<script>
import BtnOrange from '@/components/_Buttons/Btn_Orange/';

export default {
  name: 'QuicklinkLink',
  components: {
    BtnOrange
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
  }
};
</script>
