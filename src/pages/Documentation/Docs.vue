<template>
  <div>
    <navbar :home="false"/>
    <rightbody/>
  </div>
</template>

<style lang="scss">
@import "config/configApp.var";

h1 {
  font-size: 1.875rem;
  line-height: 3.4375rem;
  font-family: $FONT-STANDARD;
  font-weight: normal;
}

.gatui-u-typo-body {
  font-size: rem(14px);
  line-height: rem(20px);
  font-family: $FONT-STANDARD;
  font-weight: normal;
}

h3, .gatui-u-typo-h3 {
  font-size: rem(16px);
  line-height: rem(22px);
  font-family: $FONT-STANDARD;
  font-weight: normal;

  @media (min-width: 40em) {
    font-size: rem(20px);
    line-height: rem(26px);
  }
}
</style>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::webkit-scrollbar-thumb {
  background: #888;
}

::webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
import Navbar from '@/components/NavigationBar/';
import { ACTION_SET_PROJECT } from '@/store/mutation-types';
import Rightbody from './component/right-body.vue';

export default {
  name: 'Documentation',
  components: {
    Navbar,
    Rightbody
  },
  /* eslint-disable */
  watch: {
    '$route.params.apiId': function () {
      this.$store.dispatch(ACTION_SET_PROJECT, this.$route.params.apiId);
    }
  },
  /* eslint-enable */
  mounted() {
    this.$store.dispatch(ACTION_SET_PROJECT, this.$route.params.apiId);
  }
};
</script>
