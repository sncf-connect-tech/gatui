<template>
  <div class="menuFolder">
    <div
      v-for="menu in menuToShow"
      :key="menu"
      class="menuSingle"
    >
      <button
        class="menuDrop"
      >{{ menu }}</button>
      <div
        class="menuDrop-content"
      >
        <menu-item
          v-for="item in jsonData[menu]"
          :key="item.path"
          :type="item.type"
          :label="item.label"
          :path="item.path"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "config/configApp.var";

.menuFolder {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & .menuDrop-content {
    display: none;
    top: 40px;
    position: absolute;
    background-color: $COLOR-WHITE;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    font: 400 15px 'Open Sans', sans-serif;

    & a:hover {
      background-color: #eeeeee;
    }

    & a {
      display: block;
      color: $COLOR_PRIMARY;
      text-decoration: none;
      padding: 12px 16px;
    }
  }

  & .menuSingle {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    &:hover .menuDrop-content {
      display: block;
    }
  }
}

.menuDrop {
  background-color: transparent;
  color: $COLOR-WHITE;
  font: 400 15px 'Open Sans', sans-serif;
  border: none;
  outline: 0;
}

</style>

<script>
import { debugLog } from '@/utils/debug';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { SET_MENUS_DATA } from '@/store/mutation-types';
import MenuService from '../service/menu_service';
import MenuItem from './menuItem.vue';

export default {
  name: 'MenuFolder',
  components: {
    FontAwesomeIcon,
    MenuItem
  },
  computed: {
    jsonData() { return this.$store.getters.getMenusData; },
    menuToShow() { return this.$store.getters.getMenusKeys; }
  },
  beforeCreate() {
    MenuService.getConfigurationMenu()
      .then((data) => {
        try {
          const menuData = JSON.parse(data[0].source.content);
          if (menuData !== this.jsonData) {
            this.$store.commit(SET_MENUS_DATA, menuData);
          }
        } catch (e) {
          // eslint-disable-next-line
        }
      })
      .catch(err => debugLog(err));
  }
};
</script>
