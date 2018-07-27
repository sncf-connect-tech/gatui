<template>
  <transition name="modal-fade">
    <div
      class="modal-backdrop"
    >
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button
          :aria-label="_s_aria"
          class="btn-close"
          @click="close"
        >x</button>
        <div
          id="modalTitle"
          class="modal-header"
        >
          <div class="icon content-middle">
            <font-awesome-icon :icon="cogIcon" /><br/>
          </div>
          <div class="content-middle">
            <h1>
              {{ _s_line1 }}<br/>
              {{ _s_line2 }}<br/>
              {{ _s_line3 }}
            </h1>
          </div>
        </div>
        <div
          id="modalDescription"
          class="modal-body"
        >
          <div class="content-middle">
            <a
              :href="`mailto:${feedbackMail}`">
              {{ feedbackMail }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "config/configApp.var";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  & .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    font: 400 15px 'Open Sans', sans-serif;
  }

  & .btn-close {
    border: none;
    width: 33px;
    height: 33px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    color: $COLOR_PRIMARY;
    background: transparent;
    position: relative;

    &:hover {
      color: red;
    }

    &:focus {
      outline: 0;
    }
  }

  & .content-middle {
    display: inline-flex;
    width: 100%;
    justify-content: center;

    & a {
      text-decoration: none;
      color: $COLOR_PRIMARY;
      transition: all 0.3s ease-out;

      &:hover {
        color: $COLOR_SECONDARY;
      }
    }
  }

  & .input-area-feedback {
    resize: none;
    border-color: $COLOR_PRIMARY;
    transition: all .3s ease-out;

    &:hover {
      border-color: $COLOR_SECONDARY;
    }

    &:focus {
      border-color: blue;
    }
  }

  & .icon {
    font-size: 5rem;
    & svg {
      animation-name: rotate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
      }
    }
  }

  & .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: $COLOR_PRIMARY;
    justify-content: center;
    padding: 15px;
    display: block;
  }

  & .modal-body {
    position: relative;
    padding: 20px 10px;
    justify-content: center;
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import { feedback, wording } from '@/config/Application.conf';

export default {
  name: 'Modal',
  components: {
    FontAwesomeIcon
  },
  computed: {
    cogIcon() { return faCog; },
    feedbackMail() { return feedback; },
    _s_line1() { return wording.feedback.line1; },
    _s_line2() { return wording.feedback.line2; },
    _s_line3() { return wording.feedback.line3; },
    _s_aria() { return wording.feedback.aria_close; }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
