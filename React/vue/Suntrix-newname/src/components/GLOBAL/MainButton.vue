<template >
    <div style="text-align:center; cursor: pointer"  :style="{transition: transition, background: elementHover ? hoverBG : background, color: color, padding: paddings, fontSize: fontSize, fontWeight: fontWeight, border: elementHover ? hoverBorder : border, borderRadius: borderRadius}" @mouseover="elementHover = true" @mouseleave="elementHover = false"><slot></slot></div>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    transition: {
      type: String,
      default: "all .2s ease"
    },
    background: {
      type: String,
      default: "#615DFA"
    },
    color: {
      type: String,
    },
    hoverBG: {
      type: String,
    },
    hoverBorder: {
      type: String,
      default: "none"
    },
    paddings: {
      type: String,
      default: "18px 0px"
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    fontWeight: {
      type: String,
      default: "bold"
    },
    border: {
      type: String,
      default: "none"
    },
    borderRadius: {
      type: String,
      default: "8px"
    }
  },
  data() {
    return {
      elementHover: false,
      active: false,
    }
  },

};
</script>

<style lang="less" scoped>
@import "../../assets/GLOBAL/variables";
*{
  color: white;
}
</style>
