<template>
  <div class="contrib-line gatui-u-typo-h3">
    <p><a :href="link">
      <span
        v-if="icon"
        class="contrib-line-icon">
        <font-awesome-icon :icon="icon" />
      </span>
      <span class="contrib-line-title">{{ title }}<span v-if="content !== ''">:</span></span>
      <span class="contrib-line-content">{{ content }}</span>
    </a></p>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.contrib-line
  padding-left: 30px
  font-size: smaller
  line-height: 1rem

.contrib-line-icon
  margin-right: 5px
  transition: all 0.2s ease

.contrib-line-content
  padding-left: 5px
  color: $COLOR-PRIMARY
  transition: all 0.2s ease
  font-style: italic
  font-size: small

.contrib-line-content:hover
  color: $COLOR-SECONDARY

.contrib-line:hover
  .contrib-line-icon
    color: $COLOR-SECONDARY

a
  text-decoration: none
  color: $COLOR-BLACK
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'ContributionBox',
  components: {
    FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    content: {
      type: String,
      required: false,
      default: null
    },
    icon: {
      type: Object,
      required: false,
      default: () => {}
    },
    link: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
