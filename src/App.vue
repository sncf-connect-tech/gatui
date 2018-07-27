<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { theme, wording } from '@/config/Application.conf';

export default {
  name: 'App',
  metaInfo: {
    title: wording.appName,
    htmlAttrs: {
      lang: theme.locale
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'ratio';
  src: url('./assets/fonts/Baloo-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
</style>
