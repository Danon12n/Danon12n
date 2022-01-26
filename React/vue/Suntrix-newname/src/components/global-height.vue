<template>
     <div class="expansion" :style="style">
      <slot/>
    </div>
</template>

<script>
    export default {
        props: ['show'],
        computed: {
    style() {
      return `height: ${this.show ? this.$el.scrollHeight : 0}px`;
    }
  },
    }
</script>

<style lang="less" scoped>

</style>