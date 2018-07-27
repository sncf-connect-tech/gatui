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
  background: #D6D5D5
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
  &:hover
    cursor: pointer
    background-color: #757575
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
