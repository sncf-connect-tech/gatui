<template>
  <div class="contact-container">
    <div class="contact-title">
      <h1>{{ _w_contacts }}</h1>
    </div>
    <div
      v-if="dataProject.contacts !== null"
      class="contact-btns"
    >
      <a
        v-for="item in dataProject.contacts"
        :key="`urlProject-${item.url}`"
        :href="item.url"
      >
        <btn-grey :content="item.label"/>
      </a>
    </div>
  </div>
</template>

<style lang="sass">
@import "config/configApp.var"

.contact-container
  padding: 0
  width: 100%
  padding-bottom: 35px
  background-color: #EEEEEE
  & .contact-title
    position: relative
    top: 10px
    left: 0
    & h1
      margin: 0
  & .contact-btns
    display: flex
    flex-wrap: wrap
    width: 100%
    justify-content: center
    margin-top: 20px
    padding-right: 30px
    padding-left: 30px
    & button
      margin: 5px 5px 5px 5px
    & .clm-mail
      margin-left: 10px
      margin-right: 10px
</style>

<script>
import { wording } from '@/config/Application.conf';
import BtnGrey from '@/components/_Buttons/Btn_Grey/';

export default {
  name: 'Contact',
  components: {
    BtnGrey
  },
  props: {
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    },
    _w_contacts() { return wording.generalCode.contacts; }
  }
};
</script>
