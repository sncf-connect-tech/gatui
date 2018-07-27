<template>
  <div class="paper-box">
    <span class="title">{{ _w_title }}</span>
    <div class="container-promo">
      <promo
        v-for="item in promoWording"
        :key="item.title"
        :title="item.title"
        :description="item.description"
      />
    </div>
    <router-link
      :to="{name: 'Home'}"
    >
      <btn-orange :content="btnGetStarted" />
    </router-link>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

$break-small: 920px

.container-promo
  margin-top: 27px
  margin-bottom: 27px
  width: 100%
  height: 180px
  display: flex
  align-items: center
  justify-content: space-between
  padding-right: 17px
  padding-left: 17px
  @media screen and (max-width: $break-small)
    display: none

$c1: $COLOR-PRIMARY
$c2: $COLOR-SECONDARY

.title
  font-family: $FONT-STANDARD
  font-style: normal
  font-weight: normal
  line-height: normal
  font-size: 30px
  letter-spacing: -0.0461538px
  background: linear-gradient(to right, $c1 20%, $c2 40%, $c2 60%, $c1 80%)
  background-size: 200% auto
  color: #444444
  brackground-clip: text
  text-fill-color: transparent
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s linear infinite
  @keyframes shine
    to
      background-position: 200% center

.paper-box
  padding-top: 32px
  width: 900px
  height: 362px
  background: white
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16), 0px 2px 5px rgba(0, 0, 0, 0.26)
  text-align: center
  @media screen and (max-width: $break-small)
    width: 100%
    height: 100%
    overflow: hidden
</style>

<script>
import { wording } from '@/config/Application.conf';

import BtnOrange from '@/components/_Buttons/Btn_Orange/';

import Promo from './Promo.vue';

export default {
  name: 'PaperBox',
  components: {
    Promo,
    BtnOrange
  },
  data() {
    return {
    };
  },
  computed: {
    promoWording() {
      return [
        wording.promo.left,
        wording.promo.middle,
        wording.promo.right
      ];
    },
    _w_title() { return wording.promo.title; },
    btnGetStarted() { return wording.btnGetStarted; }
  }
};
</script>
