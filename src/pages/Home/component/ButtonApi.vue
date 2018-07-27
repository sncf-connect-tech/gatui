<template>
  <router-link
    :to="{name: 'Docs', params: {apiId: dataBtn.shortName}}">
    <div
      :style="(isLast === true) ? 'width: 88%;' : ''"
      class="box-api">
      <div class="headline-box">
        <div class="icon">
          <font-awesome-icon :icon="_i_star" />
        </div>
        <span class="title font-list">{{ dataBtn.shortName }}</span>
        <span class="version font-list">v{{ dataBtn.version }}</span>
      </div>
      <div class="content-box">
        <span class="description font-list">
          {{ dataBtn.shortDesc }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"
@import "./assets/styles/mixins"

$break-small: 920px

.box-api
  width: 40%
  @media screen and (max-width: $break-small)
    width: 90%
    margin-left: 0
  min-width: 300px
  margin-right: 4%
  margin-left: 4%
  position: relatve
  margin-bottom: 5px
  display: inline-block
  vertical-align: top
  height: 90px
  border: 1px dashed transparent
  padding: 5px
  transition: 0.3s all ease-in-out
  &:hover
    border: 1px dashed #BDBDBD
    cursor: pointer
  & .headline-box
    text-align: left
    & .title
      color: #444444
    & .version
      font-size: 14px
      letter-spacing: -0.002px
      color: #BDBDBD
    & .icon
      display: inline-block
      position: relative
      top: -3px
      color: #BDBDBD
  & .content-box
    text-align: left
    & .description
      color: #BDBDBD
      font-size: 16px
      letter-spacing: -0.025px
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faTrain from '@fortawesome/fontawesome-free-solid/faTrain';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import MarkDownLoader from '@/components/MarkdownLoader/';
import ApiButtonModel from '../models/api_button';

export default {
  name: 'ButtonApi',
  components: {
    MarkDownLoader,
    FontAwesomeIcon
  },
  props: {
    dataBtn: {
      type: ApiButtonModel,
      required: true,
      default: () => {}
    },
    isLast: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    _i_train() { return faTrain; },
    _i_star() { return faStar; }
  }
};
</script>
