<template>
  <div class="afterRAF">
    <div class="wrapper">
      <CircleComp
        :reverseAnim="true"
        :color="color"
      ></CircleComp>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import CircleComp from "@/components/GLOBAL/circle";
export default {
  name: "",
  data() {
    return {
      color: "#32CFF5",
      message: "Входим в аккаунт...",
    };
  },
  components: {
    CircleComp,
  },
  methods: {
    changeColor(color) {
      this.color = color;
    },
  },
  mounted() {
    setTimeout(() => {
      this.changeColor("#4DFFD4");
    }, 500);
    setTimeout(() => {
      this.changeColor("#C2F532");
      this.message = "Готово!";
    }, 1800);
    setTimeout(() => {
      this.$router.push('/select-character')
      this.$store.commit('CHANGE_GREETINGS', true)
    }, 2500);
  },
};
</script>

<style lang="less" scoped>
.afterRAF {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>