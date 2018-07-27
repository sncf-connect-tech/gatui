<template>
  <div>
    <canvas></canvas>
    <div class="svg-position">
      <svg
        :style="styleSVG"
        class="poly-purple"
        width="278"
        height="305"
        viewBox="0 0 278 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M188.687 0L352.094 424.683H25.2792L188.687 0Z"
          transform="translate(443.725 215.16) rotate(151.596)"
          fill="#EA4D94"
        />
      </svg>
    </div>
    <div class="svg-position">
      <svg
        :style="styleSVG"
        width="365"
        height="471"
        viewBox="0 0 365 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M228.463 0L426.319 560.227H30.6083L228.463 0Z"
          transform="translate(521.23 304.254) rotate(133.15)"
          fill="#F28A2C"/>
      </svg>
    </div>
    <div class="svg-position">
      <svg
        width="541"
        height="701"
        viewBox="0 0 541 701"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M506.2 0L944.582 655.848H67.8179L506.2 0Z"
          transform="translate(254.21 1054.25) rotate(-148.406)"
          fill="#B51742"
        />
      </svg>
    </div>
    <div class="svg-position yellow">
      <svg
        width="664"
        height="1573"
        viewBox="0 0 664 1573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416.99 0L778.113 1720.24H55.866L416.99 0Z"
          transform="translate(-354.01 220.235) rotate(-31.781)"
          fill="#F7A62B"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$break-small: 1000px

canvas
  position: fixed
  width: 100%
  height: 100%
  padding: 0

svg
  transition: all 10s ease-in-out

.svg-position
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.yellow svg
  position: absolute
  right: 0
  top: 0
  @media screen and (max-width: $break-small)
    display: none
</style>

<script>
import Phenomenon from 'phenomenon';

export default {
  name: 'Background',
  components: {
    Phenomenon
  },
  data() {
    return {
      styleTranslate: 0,
      interval: null
    };
  },
  computed: {
    styleSVG() { return `transform: translate(-${this.styleTranslate}%,-${this.styleTranslate}%);`; }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.styleTranslate = (this.styleTranslate >= 30) ? 0 : 30;
    }, 10000);
    this.pheno();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    pheno() {
      /* eslint-disable */
      const multiplier = 40000;
      const begin = 0.4;
      const duration = 0.6;

      function h2r(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
        return p;
      };

      function getHSL(h, s, l){
        h = (h % 1 + 1) % 1;
        s = Math.max(0, Math.min(1, s));
        l = Math.max(0, Math.min(1, l));
        if (s === 0) return [l, l, l];
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        return [h2r(q, p, h + 1 / 3), h2r(q, p, h), h2r(q, p, h - 1 / 3)];
      };

      function getRandom(value) {
        const floor = -value;
        return floor + Math.random() * value * 2;
      }

      const attributes = [
        {
          name: "aPositionStart",
          data: (index, total) => {
            return [
              0, 
              -1, 
              0,
            ];
          },
          size: 3
        },
        {
          name: "aControlPointOne",
          data: (index, total) => {
            const angle = index * (2 * Math.PI / total);
            return [
              Math.cos(angle) * 1.5 + getRandom(0.5),
              1.5 + getRandom(0.5),
              Math.sin(angle) * 1.5,
            ];
          },
          size: 3
        },
        {
          name: "aControlPointTwo",
          data: (index, total) => {
            const angle = index * (2 * Math.PI / total);
            return [
              Math.cos(angle) + getRandom(1),
              1 + getRandom(0.5),
              Math.sin(angle) + getRandom(1)
            ];
          },
          size: 3
        },
        {
          name: "aPositionEnd",
          data: (index, total) => {
            const angle = index * (2 * Math.PI / total);
            return [
              Math.cos(angle) + getRandom(2), 
              -2, 
              0,
            ];
          },
          size: 3
        },
        {
          name: "aColor",
          data: (index, total) =>
            getHSL(
              begin + index / total * 0.2,
              0.6 + getRandom(0.1),
              0.6 + getRandom(0.1),
            ),
          size: 3
        },
        {
          name: "aOffset",
          data: i => [i * ((1 - duration) / (multiplier - 1))],
          size: 1
        }
      ];

      const uniforms = {
        uProgress: {
          type: "float",
          value: 0.0
        }
      };

      const vertex = `
        attribute vec3 aPositionStart;
        attribute vec3 aControlPointOne;  
        attribute vec3 aControlPointTwo;  
        attribute vec3 aPositionEnd;  
        attribute vec3 aPosition;  
        attribute vec3 aColor;  
        attribute float aOffset;  

        uniform float uProgress;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uViewMatrix;

        varying vec3 vColor;

        vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
          return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
        }

        void main(){
          float tProgress = min(1.0, max(0.0, (uProgress - aOffset)) / ${duration});
          vec3 newPosition = bezier4(aPositionStart, aControlPointOne, aControlPointTwo, aPositionEnd, tProgress);
          gl_PointSize = 4.0;
          gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + aPosition, 1.0);
          vColor = aColor;
        }
      `;

      const fragment = `
        precision mediump float;

        varying vec3 vColor;

        void main(){
          gl_FragColor = vec4(vColor, 1.0);
        }
      `;

      const renderer = new Phenomenon({
        canvas: document.querySelector("canvas"),
        settings: {
          clearColor: [239 / 255, 239 / 255, 239 / 255, 1],
          position: {x: 0, y: 0, z: 1.2 },
          shouldRender: true
        }
      });

      renderer.add("starling", {
        attributes,
        multiplier,
        uniforms,
        vertex,
        fragment,
        didRender: instance => {
          instance.uniforms.uProgress.value += 0.004;
          if (instance.uniforms.uProgress.value >= 1.2) {
            instance.uniforms.uProgress.value = 0;
          }
        }
      });
      /* eslint-enable */
    }
  }
};
</script>
