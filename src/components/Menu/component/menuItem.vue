<template>
  <div>
    <router-link
      v-if="type === 'markdown'"
      :to="{name: 'MdPage', params: {path: path }}"
    >
      {{ label }}
    </router-link>
    <a
      v-if="type === 'url'"
      :href="path"
    >
      {{ label }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'MenuItem',
  components: {
  },
  props: {
    type: {
      type: String,
      required: true,
      default: 'markdown'
    },
    path: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      required: true,
      default: 'Error: Missing props'
    }
  }
};
</script>
