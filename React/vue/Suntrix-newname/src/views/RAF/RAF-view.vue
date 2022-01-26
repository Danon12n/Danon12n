<template>
  <div id="root__of__RAF">
    <div id="root__main__text" v-if='!$store.state.RAF.APP__SETTINGS.afterRAF_comp'>
      <RAFText></RAFText>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import RAFText from "@/components/RAF/RAF-text";
export default {
  name: "Login-comp",
  components: {
    RAFText,
  },
  data() {
    return {
      RAFoptions: {
        step: 1,
      },
      userInfo: {
        login: "",
        password: "",
      },
      inputOptions: {
        passwordHide: false,
      },
    };
  },
  computed: {
    inputResult() {
      return this.inputOptions.passwordHide ? "text" : "password";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/RAF/Log_X_Reg.less";
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>