<template>
  <div class="paper-box-domain">
    <div class="headline-domain">
      <span class="title-domain font-list">{{ titre }}</span>
      <span class="sub-title-domain font-list">
        {{ description }}
      </span>
    </div>
    <div class="list-apis">
      <button-api
        v-for="item in arrayData"
        :key="`btn-${item.shortName}`"
        :data-btn="item"
        :is-last="(arrayData.indexOf(item) === arrayData.length - 1)
        && (arrayData.indexOf(item) % 2 === 0)"
      />
    </div>
  </div>
</template>

<style lang="sass">
@import "config/configApp.var"

.font-list
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 30px
  letter-spacing: -0.0461538px
</style>

<style lang="sass" scoped>
@import "config/configApp.var"

$break-small: 920px

.paper-box-domain
  // Debug
  width: 80%
  //-----
  position: relative
  padding-top: 32px
  margin-bottom: 20px
  display: flex
  align-items: center
  // max-width: 1200px
  background: white
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16), 0px 2px 5px rgba(0, 0, 0, 0.26)
  text-align: center
  height: 100%
  @media screen and (max-width: $break-small)
    width: 100%
    height: 100%
    overflow: hidden
  & .headline-domain
    position: absolute
    top: 0
    left: 0
    width: 100%
    & .title-domain
      position: absolute
      top: 21px
      left: 28px
      color: #444444
    & .sub-title-domain
      position: absolute
      left: 28px
      top: 66px
      color: #BDBDBD
      font-size: 16px
      letter-spacing: -0.025px
  & .list-apis
    width: 100%
    margin-top: 90px
    margin-bottom: 15px
</style>

<script>
import { wording } from '@/config/Application.conf';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faTrain from '@fortawesome/fontawesome-free-solid/faTrain';
import ButtonApi from './ButtonApi.vue';

export default {
  name: 'Boxhome',
  components: {
    ButtonApi,
    FontAwesomeIcon
  },
  props: {
    arrayData: {
      type: Array,
      required: true,
      default: () => {}
    },
    titre: {
      type: String,
      required: true,
      default: 'title'
    },
    description: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    _w_domain() { return wording.generalCode.domain; },
    _i_train() { return faTrain; }
  }
};
</script>
