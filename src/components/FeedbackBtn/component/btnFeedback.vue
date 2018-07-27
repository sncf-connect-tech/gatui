<template>
  <div
    class="feedback-btn"
    @keyup.esc="toggleModal"
  >
    <button
      @click="toggleModal"
    >
      Feedback
    </button>
    <modal
      v-show="isModalVisible"
      @close="toggleModal"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";

$color_button: $COLOR_SECONDARY;

.feedback-btn
{
  & button {
    background-color: transparent;
    padding: 2px 8px 2px 8px;
    border: 1px solid $COLOR-WHITE;
    border-radius: 10%;
    transition: 0.1s all ease;
    color: $COLOR-WHITE;
    font: 400 15px 'Open Sans', sans-serif;
    &:hover {
      background-color: $color_button;
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  }
}
</style>

<script>
import Modal from './modalFeedback.vue';

export default {
  name: 'BtnFeedback',
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  computed: {
  },
  methods: {
    toggleModal() { this.isModalVisible = !this.isModalVisible; }
  }
};
</script>
