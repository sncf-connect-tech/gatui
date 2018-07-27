<template>
  <div>
    <button>
      {{ content }}
    </button>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

button
  width: 160px
  height: 35px
  background: #EA5330
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.26), 0px 2px 10px rgba(0, 0, 0, 0.16)
  border: 0
  border-radius: 3px
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 18px
  text-align: center
  color: #FFFFFF
  transition: .2s all ease-in
  outline: 0
  text-overflow: 'ellipsis'
  overflow: hidden
  &:hover
    cursor: pointer
    background-color: $COLOR-SECONDARY
</style>

<script>

export default {
  name: 'ButtonOrange',
  components: {
  },
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  }
};
</script>
