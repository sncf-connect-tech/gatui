<template>
  <div class="promo">
    <span class="title">{{ title }}</span>
    <div class="description">{{ description }}</div>
  </div>
</template>

<style lang="sass">
$break-small: 920px
.promo
  width: 262px
  height: 180px
  background-color: white
  position: relative
  @media screen and (max-width: $break-small)
    height: 50px

</style>

<style lang="sass" scoped>
@import "config/configApp.var"
$break-small: 920px

.title
  position: absolute
  left: 11px
  top: 11px
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 18px
  letter-spacing: -0.0288462px
  color: #444444
  text-align: left
  overflow: hidden
  @media screen and (max-width: $break-small)
    top: 0

.description
  position: absolute
  top: 70px
  left: 11px
  width: 210px
  height: 99px
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 16px
  letter-spacing: -0.025px
  color: #BDBDBD
  text-align: left
  @media screen and (max-width: $break-small)
    top: 50px

</style>

<script>
export default {
  name: 'Promo',
  components: {
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
    };
  },
  computed: {
  }
};
</script>
