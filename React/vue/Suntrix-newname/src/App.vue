<template>
  <div id="root">
    <!-- comps -->
    <div class="view" :class="{background: $route.path !== '/'}">
      <transition name="component-fade" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
    <div class="hello__greetings" v-if='$store.state.RAF.userInfo_global.login && $route.path !== "/"  '>
      <p>Вы вошли как, {{$store.state.RAF.userInfo_global.login}}</p>
      <b>Приятной игры!</b>
    </div>
    <!-- fot/s -->
<!--Notify-->
    <transition name="notify-fade" mode="out-in">
      <Notify v-show="$store.getters.NotifyInfo.show"></Notify>
    </transition>
  </div>
</template>

<script>
import Notify from "@/components/GLOBAL/Notify";

export default {
  components:{
    Notify
  },
  methods: {
    changeUrl(newUrl) {
      this.$router.push(newUrl);
    },
  },
};
</script>

<style lang="less">
@import "./assets/GLOBAL/reset.css";
@import "./assets/GLOBAL/font/stylesheet.css";
@import "./assets/GLOBAL/variables";
* {
  font-family: Gilroy !important;
}


</style>
<style lang="less" scoped>
#root {
  height: 100vh;
  display: flex;
  overflow: hidden; // hide to
  .background{
    background: linear-gradient(
        91.3deg,
        rgba(24, 11, 44, 0.79) 2.63%,
        rgba(13, 5, 26, 0.35) 98.89%
    );
  }

  .view {
    width: 100vw;
  }
  .hello__greetings {
    position: absolute;
    bottom: 30px;
    right: 30px;
    text-align: right;
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.7);
    }
    b {
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      color: #ffffff;
    }
  }
}


.component-fade-enter-active, .component-fade-leave-active {
  transition: all .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.notify-fade-enter-active, .notify-fade-leave-active {
  transition: all .3s ease;
}
.notify-fade-enter, .notify-fade-leave-to
  /* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  margin-left: 70px;
}
</style>

