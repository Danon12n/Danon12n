<template>
  <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
    id="circle__root"
    :style="{
      width: `${size + step * 2}px`,
      height: `${size + step * 2}px`,
    }"
    :class="{
      pulseAnimation: pulse,
    }"
  >
    <div class="playButton" v-if="playSVG">
      <svg width="39" height="43" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="{goWite: playWhite}" d="M36.5687 17.3413C39.8104 19.1896 39.8104 23.8104 36.5687 25.6587L7.29403 42.3495C4.05224 44.1978 -1.83096e-06 41.8874 -1.66937e-06 38.1908L-2.10216e-07 4.80918C-4.86329e-08 1.11259 4.05223 -1.19778 7.29402 0.650508L36.5687 17.3413Z" fill="#7DA01B"/>
      </svg>

    </div>
    <div
      class="circle small bm"
      :style="{ width: `${size}px`, height: `${size}px`, background: hoverComputed }"
    >
      <div
        class="circle middle bm"
        :class="{
          reverse: reverseAnim,
        }"
        :style="{
          width: `${size + step}px`,
          height: `${size + step}px`,
          background: hoverComputed,
        }"
      >
        <div
          class="circle big"
          :class="{
            reverse: reverseAnim,
          }"
          :style="{
            width: `${size + step * 2}px`,
            height: `${size + step * 2}px`,
            background: hoverComputed,
            
          }"
        ></div>
      </div>
    </div>

    <div class="shadow" v-if='shadow' :style='{background: hoverComputed}'>

    </div>
  </div>
</template>

<script>
//
export default {
  name: "circle",
  props: {
    playWhite: {
      type: Boolean,
      default: false
    },
    playSVG: {
      type: Boolean,
      default: false
    },
    hoverColor: {
      type: String,
    },
    size: {
      // !
      type: Number,
      default: 92,
    },
    viewBox: {
      // !
      type: String,
      default: "0 0 203 203",
    },
    step: {
      type: Number,
      default: 54,
    },
    color: {
      // !
      type: String,
      default:
        "linear-gradient(181.42deg, rgba(50, 207, 245, 0.17) 1.21%, #4DDCFF 61.62%)",
    },
    pulse: {
      // !
      type: Boolean,
      default: false,
    },
    reverseAnim: {
      type: Boolean,
      default: false,
    },
    positionY: {
      type: String,
      default: "center",
    },
    positionX: {
      type: String,
      default: "center",
    },
    position: {
      type: String,
      default: "none",
    },
    shadow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    hoverComputed() {
      if(this.hover){
        if(this.hoverColor){
          return this.hoverColor
        }else{
          return this.color
        }
      }else{
        return this.color
      }
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@keyframes pulseAnim {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
.pulseAnimation {
  animation: pulseAnim 2.5s 0.1s infinite;
}

@keyframes reverseAnim {
  from {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(-1);
  }
  to {
    transform: scaleY(1);
  }
}
.reverse {
  animation: reverseAnim 2.5s 0.1s infinite;
}

.circle {
  border-radius: 100%;
  z-index: 2;
  background: linear-gradient(
    181.42deg,
    rgba(50, 207, 245, 0.17) 1.21%,
    #4ddcff 61.62%
  );
  transition: background 0.2s ease;
  position: relative;
  &::before {
    opacity: 0;
    transition: all 0.2s ease;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 100%;
  }
  
}

.shadow{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(50px);
    border-radius: 100%;
    z-index: 1;
    opacity: .4;
}

.middle {
  opacity: 0.45;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}
.big {
  opacity: 0.15;
  position: relative;
  flex-shrink: 0;
}
.small {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}
#circle__root {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.playButton{
  position: absolute;
  z-index:3;
  transform: scale(-1)
}

@keyframes playAnim {
  from {
    fill: #7DA01B;
  }
  to {
    fill: white;
  }
}
.goWite{
  animation-name: playAnim;
  animation-duration: 1s;
  animation-delay: .1s;
  -webkit-animation-fill-mode: forwards;
}
</style>