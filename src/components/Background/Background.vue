<template>
  <div>
    <div class="svg-position">
      <svg
        :style="styleSVG"
        class="poly-purple"
        width="278"
        height="305"
        viewBox="0 0 278 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M188.687 0L352.094 424.683H25.2792L188.687 0Z"
          transform="translate(443.725 215.16) rotate(151.596)"
          fill="#EA4D94"
        />
      </svg>
    </div>
    <div class="svg-position">
      <svg
        :style="styleSVG"
        width="365"
        height="471"
        viewBox="0 0 365 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M228.463 0L426.319 560.227H30.6083L228.463 0Z"
          transform="translate(521.23 304.254) rotate(133.15)"
          fill="#F28A2C"/>
      </svg>
    </div>
    <div class="svg-position">
      <svg
        width="541"
        height="701"
        viewBox="0 0 541 701"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M506.2 0L944.582 655.848H67.8179L506.2 0Z"
          transform="translate(254.21 1054.25) rotate(-148.406)"
          fill="#B51742"
        />
      </svg>
    </div>
    <div class="svg-position yellow">
      <svg
        width="664"
        height="1573"
        viewBox="0 0 664 1573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416.99 0L778.113 1720.24H55.866L416.99 0Z"
          transform="translate(-354.01 220.235) rotate(-31.781)"
          fill="#F7A62B"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$break-small: 1000px

svg
  transition: all 10s ease-in-out

.svg-position
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.yellow svg
  position: absolute
  right: 0
  top: 0
  @media screen and (max-width: $break-small)
    display: none
</style>

<script>
export default {
  name: 'Background',
  components: {
  },
  data() {
    return {
      styleTranslate: 0,
      interval: null
    };
  },
  computed: {
    styleSVG() { return `transform: translate(-${this.styleTranslate}%,-${this.styleTranslate}%);`; }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.styleTranslate = (this.styleTranslate >= 30) ? 0 : 30;
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    makeBackgroundMove() {
    }
  }
};
</script>
