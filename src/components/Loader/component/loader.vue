<template>
  <div class="loader-container">
    <div class="loader">
      <div class="loader__background"></div>
      <div class="loader__arc loader__arc--1"></div>
      <div class="loader__arc loader__arc--2"></div>
      <div class="loader__arc loader__arc--3"></div>
      <div class="loader__arc loader__arc--4"></div>
      <div class="loader__arc loader__arc--5"></div>
      <div class="loader__arc loader__arc--6"></div>
    </div>
    <div class="text-loading">
      Chargement
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./loader.scss";
</style>

<style lang="sass" scoped>
@import "config/configApp.var"

.loader
  margin-left: auto
  margin-right: auto
  border-bottom: 1px solid $COLOR-GREY-LIGHT

.text-loading
  text-align: center
  width: 100%
  font-size: xx-small
  font-style: italic

.loader-container
  width: 100%
</style>

<script>
export default {
  name: 'Loader'
};
</script>
