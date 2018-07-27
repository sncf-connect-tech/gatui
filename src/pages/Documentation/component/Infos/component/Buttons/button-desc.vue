<template>
  <div
    :class="{ active: activation }"
    class="connect-button"
  >
    <button
      class="gatui-u-typo-h3"
      @click="changeActiveBtn">
      {{ name }}
    </button>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.connect-button
  margin-right: 10px
  border-bottom: 5px solid transparent
  transition: 0.3s all ease

  button
    padding: 0
    border: none
    background-color: transparent
    width: 100%
    height: 100%
    cursor: pointer

.active
  border-bottom: 5px solid $COLOR-SECONDARY

</style>

<script>
export default {
  name: 'ButtonDescription',
  props: {
    name: {
      type: String,
      required: true,
      default: 'None'
    },
    toActivate: {
      type: Number,
      required: true,
      default: 0
    },
    isActive: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    activation() {
      return this.isActive === parseInt(this.toActivate, 10);
    }
  },
  methods: {
    changeActiveBtn() {
      this.$emit('activeBtn', { activeBtn: this.toActivate });
    }
  }
};
</script>
