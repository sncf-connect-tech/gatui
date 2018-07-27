<template>
  <div>
    <navbar :home="false" />
    <div class="content">
      <div class="center-content">
        <!-- <h1>{{ $route.params.path }}</h1>
        <a @click="$router.go(-1)">Précédent</a> -->
        <div class="mdLoader-content">
          <mark-down-loader
            :md-data="{ type: 'markdown', path: $route.params.path }"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";

.content {
  position: fixed;
  top: 40px;
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: auto;
  display: flex;
  justify-content: center;

  & .center-content {
    position: relative;
    top: 40px;
    max-width: 1200px;

    & h1 {
      font: 200 30px 'Open Sans', sans-serif;
      color: $COLOR_SECONDARY;
    }

    & a {
      font: 400 15px 'Open Sans', sans-serif;
      color: $COLOR_SECONDARY;
      &:hover {
        color: $COLOR_PRIMARY;
        cursor: pointer;
      }
    }

    & .mdLoader-content {
      margin-top: 10px;
      border: 1px solid #eeeeee;
      padding: 10px;
    }
  }
}

.dashboard {
  text-align: center;
  margin: auto;
  max-width: 1300px;
  margin-top: 40px;
}
</style>

<script>
import Navbar from '@/components/NavigationBar/';
import MarkDownLoader from '@/components/MarkdownLoader/';

export default {
  name: 'MdPage',
  components: {
    Navbar,
    MarkDownLoader
  },
  data() {
    return {
    };
  },
  created() {
  }
};
</script>
