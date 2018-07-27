<template>
  <div class="button-box">
    <div class="header-box oui-u-typo-h3">
      <div class="header-name">
        <router-link
          :to="{name: 'Docs', params: {apiId: dataBtn.shortName}}">
          {{ dataBtn.shortName }}
          <span class="indice">v{{ dataBtn.version }}</span>
        </router-link>
        <span class="header-path">
          {{ dataBtn.shortDesc }}
        </span>
        <span
          :style="arrowDirection"
          class="arrow-left-down"
          @click="viewDetails"
        >
        </span>
      </div>
    </div>
    <div class="content-box">
      <div
        :style="descriptionTransition"
        class="content-decription oui-u-typo-body"
      >
        <div
          v-if="typeDescription === 'String'"
        >
          {{ viewDescription }}
        </div>
        <div>
          <mark-down-loader
            v-if="!turned && typeDescription === 'markdown'"
            :md-data="viewDescriptionMd"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"
@import "./assets/styles/mixins"

h1
  font-size: 1.875rem
  line-height: 3.4375rem
  font-family: $FONT-STANDARD
  font-weight: normal

.oui-u-typo-body
  font-size: rem(14px)
  line-height: rem(20px)
  font-family: $FONT-STANDARD
  font-weight: normal

h3, .oui-u-typo-h3
  font-size: rem(16px)
  line-height: rem(22px)
  font-family: $FONT-STANDARD
  font-weight: normal

  @media (min-width: 40em)
    font-size: rem(20px)
    line-height: rem(26px)

.swagger-icon
  font-style: normal
  text-decoration: none

.button-box
  flex: 1
  flex-basis: 42%
  flex-grow: 0
  margin-right: 15px
  margin-bottom: 10px
  max-width: 700px

.header-box
  display: flex
  flex-direction: row
  text-align: left
  padding-left: 10px
  padding-top: 10px
  padding-bottom: 5px
  background-color: white
  z-index: 10

.header-path
  font-size: small
  color: $COLOR-PRIMARY
  margin-left: 10px
  transition: 0.3s all ease

.header-path:hover
  color: $COLOR-SECONDARY

.header-links
  flex-shrink: 0
  width: 25px
  color: $COLOR-PRIMARY
  a
    text-decoration: none

.header-name
  flex-grow: 1
  display: flex
  a
    flex: 1
  .header-path
    flex: 1
  .arrow-left-down
    width: 0px
    height: 0px
    margin-right: 15px
    margin-top: 7px

.header-name
  a:hover
    color: $COLOR-SECONDARY
    cursor: pointer

.content-box
  border-top: 1px solid $COLOR-GREY-LIGHT
  margin-left: 10px

.content-decription
  position: relative
  max-width: 600px
  text-align: left
  padding-left: 30px
  color: $COLOR-GREY
  transition: 1s

.link-clikable
  color: $COLOR-GREY
  font-size: large

.header-name
  a
    color: $COLOR-BLACK
    text-decoration: none

.link-clikable:hover
  color: $COLOR-SECONDARY

.arrow
  display: inline-block
  positon: absolute
  right: 25px
  bottom: 20px
  border: 1px solid black
  border-width: 0 3px 3px 0
  padding: 3px
  margin-left: 10px
  cursor: pointer

.arrow-left-down
  @extend .arrow
  @include rotation(45deg)
  transition: 0.3s all ease

.arrow-left-down:hover
  border-color: $COLOR-SECONDARY;

.indice
  font-size: 0.6rem;
  padding-left: 2px;
  font-style: italic;
  color: grey;
</style>

<script>
import MarkDownLoader from '@/components/MarkdownLoader/';
import ApiButtonModel from '../models/api_button';

export default {
  name: 'ButtonApi',
  components: {
    MarkDownLoader
  },
  props: {
    dataBtn: {
      type: ApiButtonModel,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      turned: true
    };
  },
  computed: {
    arrowDirection() {
      function returnRotate(deg) {
        return `"
          -webkit-transform: rotate(${deg});
          -moz-transform: rotate(${deg});
          -ms-transform: rotate(${deg});
          -o-transform: rotate(${deg});
          transform: rotate(${deg});
        "`;
      }
      if (this.turned) {
        return returnRotate('45deg');
      }
      return returnRotate('-135deg');
    },
    descriptionTransition() {
      if (!this.turned) {
        return '';
      }
      return `"
        transform: translateY(-100px);
        opacity: 0;
      "`;
    },
    viewDescription() {
      if (!this.turned) {
        return this.dataBtn.longDesc.content;
      }
      return '';
    },
    viewDescriptionMd() {
      if (!this.turned) {
        return { type: 'markdown', path: this.dataBtn.longDesc.path };
      }
      return '';
    },
    typeDescription() {
      return this.dataBtn.longDesc.type;
    }
  },
  methods: {
    viewDetails() {
      this.turned = !this.turned;
    }
  }
};
</script>
