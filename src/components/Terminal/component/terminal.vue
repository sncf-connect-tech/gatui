<template>
  <div class="terminal-container">
    <div class="terminal-container-head">
      <div class="gatui-u-typo-h3">Connection</div>
    </div>
    <div class="terminal-outer">
      <div class="terminal-container">
        <div class="terminal-section terminal-header">
          <div class="terminal-controls">
            <span class="elem elem-close"></span>
            <span class="elem elem-minimize"></span>
            <span class="elem elem-fullscreen"></span>
          </div>
        </div>
        <div class="terminal-section terminal-body">
          <div class="terminal-section terminal-body-inner">
            <p>
              <span class="terminal-user">{{ _w_ps1 }}</span>
              <span id="terminalType">
                getApiInfo <br />
                <br />
                <span class="term-col-important">Base:</span>
                <span class="term-col-infos"> http://hpr-api/</span> <br />
                <span class="term-col-important">Token:</span>
                <span class="term-col-infos"> hpr</span> <br />
                <br />
                <br />
              </span>
              <span class="terminal-user">{{ _w_ps1 }}</span>
              <span id="terminalType">
                getCurlInfo
                <pre>{{ curlData }}</pre>
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "config/configApp.var";
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.term-col-important {
 color: $COLOR-PRIMARY;
}

.term-col-infos {
  font-style: oblique;
}
.terminal-container {
  border-radius: 0.5rem;
  margin-bottom: 20px;
}

.terminal-container-head {
  border-bottom: 1px solid $COLOR-GREY;
}

/* end ./page-wrapper */
.elem {
  height: 15px;
  width: 15px;
  display: inline-block;
  background-color: $COLOR-WHITE;
  margin-right: 10px;
  margin-top: 5px;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
  &:first-child {
    margin-left: 10px;
  }
  &.elem-close {
    background-color: $TERMINAL-WINDOW-RED;
    border-color: $TERMINAL-WINDOW-RED-BORDER;
  }
  &.elem-minimize {
    background-color: $TERMINAL-WINDOW-YELLOW;
    border-color: $TERMINAL-WINDOW-YELLOW-BORDER;
  }
  &.elem-fullscreen {
    background-color: $TERMINAL-WINDOW-GREEN;
    border-color: $TERMINAL-WINDOW-GREEN-BORDER;
  }
}
.terminal-section {
  position: relative;
  display: block;
}
.terminal-outer {
  display: block;
  margin-top: 15px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  font-size: 14px;
  font-weight: normal;
  font-family: 'Inconsolata', monospace;
  color: $COLOR-WHITE;
  text-shadow: none;
  .terminal-container {
    .terminal-header {
      background-color: #c5c5c5;
      .terminal-controls {
        display: inline-block;
        .elem {
          float: left;
        }
      }
    }
    .terminal-body {
      background-color: $TERMINAL-BACKGROUND;
      padding: 10px;
      .terminal-body-inner {
        min-height: 250px;
        color: $COLOR-WHITE;
        p {
          margin: 0 0 4px;
        }
        .terminal-user {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

<style lang="css">
.vue-typer .custom.char {
  color: white;
}

.vue-typer .custom.caret {
  background-color: white;
}
</style>

<script>
import { wording } from '@/config/Application.conf';

export default {
  name: 'Terminal',
  components: {
  },
  props: {
    curlRequest: {
      type: String,
      required: true,
      default: ''
    },
    realRequest: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      getDataSync: ''
    };
  },
  computed: {
    _w_ps1() { return wording.terminal.ps1; },
    curlData() {
      return this.curlRequest;
    },
    initialText() {
      return `getCurlInfo | bash | checkStatus 
Getting response ...
.
.
.
${this.getDataSync}
.
.
Logout...
[Done]
`;
    }
  },
  watch: {
  },
  created() {
  },
  methods: {
  }
};
</script>
