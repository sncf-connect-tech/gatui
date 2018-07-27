<template>
  <div class="md-menu">
    <li>
      <ul
        v-for="item in arrayUrl"
        :key="`label-url-${item.label}`"
      >
        <a :href="item.url">{{ item.label }}</a>
      </ul>
      <ul class="separator"></ul>
      <ul
        v-for="item in arrayLabel"
        :key="`label-menumd-${item.label}`"
        :class="activeArray[arrayLabel.indexOf(item)]"
        @click="() => load(arrayLabel.indexOf(item))"
      >{{ item.label }}</ul>
    </li>
  </div>
</template>

<style lang="sass" scoped>
@import "config/configApp.var"

.separator
  margin-bottom: 20px

li
  list-style-type: none
  margin: 0
  padding: 0
  font-family: $FONT-STANDARD
  font-style: normal
  line-height: normal
  letter-spacing: -0.0461538px
  color: #444444
  & ul
    list-style-type: none
    margin: 0
    padding: 0
    padding-left: 10px
    transition: 0.2s all ease-in
    overflow-x: hidden
    text-overflow: ellipsis
    &:hover
      color: $COLOR-SECONDARY
      cursor: pointer
    & a
      text-decoration: none
      color: $COLOR-PRIMARY
      overflow-x: hidden
      text-overflow: ellipsis
      transition: 0.2s all ease-in
      &:hover
        color: $COLOR-SECONDARY
.active
  border-left: 2px solid orange
</style>

<script>
export default {
  name: 'MdMenu',
  components: {
  },
  props: {
    arrayLabel: {
      type: Array,
      required: true,
      default: () => []
    },
    arrayUrl: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      activeDoc: 0,
      activeArray: []
    };
  },
  computed: {
    dataProject() {
      return this.$store.getters.getActiveVersion.project;
    }
  },
  created() {
    this.activeArray = [...this.arrayLabel].fill('');
    this.activeArray[0] = 'active';
  },
  methods: {
    load(i) {
      this.activeArray = [...this.arrayLabel].fill('');
      this.activeArray[i] = 'active';
      this.$emit('load', i);
    }
  }
};
</script>
