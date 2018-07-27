<template>
  <div class="footer-container">
    <div class="footer-text">
      <a :href="theme.github">
        <font-awesome-icon :icon="githubIcon" />
      </a>
      {{ wording.footerLegals }}
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.footer-container
  width: 100%
  height: 100px
  padding-left: 80px
  padding-right: 80px
  max-width: 1200px
  text-align: center
  margin: auto
  & .footer-text
    padding-top: 20px
    color: $COLOR-GREY
    font-family: Segoe UI, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif
    -webkit-font-smoothing: antialiased
    & a
      text-decoration: none
      color: $COLOR-GREY
      transition: 0.3s all ease-out
      &:hover
        color: $COLOR-SECONDARY
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import { theme, wording } from '@/config/Application.conf';

export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      theme,
      wording
    };
  },
  computed: {
    githubIcon() { return faGithub; }
  },
  methods: {
  }
};
</script>
