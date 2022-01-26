<template>
  <div id="CC-root">
    <div class="panel">
      <div class="panel__wrapper">
        <!-- ОТОБРАЖАТЬ ТАЙТЛ В CCP -->
        <header class="family">
          <div class="images">
            <transition-group name="image">
              <img :key="2" :src="getStateInfo.fatherIMG.img" />
              <img :key="1" :src="getStateInfo.motherIMG.img" />
            </transition-group>
          </div>
          <nav>
            <div class="nav__wrapper">
              <p @click="window = 1" :class="{ activeLink: window == 1 }">
                Родители
              </p>
              <p @click="window = 2" :class="{ activeLink: window == 2 }">
                Черты лица
              </p>
              <p @click="window = 3" :class="{ activeLink: window == 3 }">
                Волосы
              </p>
            </div>
          </nav>
        </header>
        <b class="content__title">Создание персонажа</b>
        <div class="content">
          <transition-group mode="in-out" name="slide-components"  class="slide">
              <Face :key='1' v-if="window == 2"/>
              <Family :key='2' v-if="window == 1"></Family>
              <Hair :key='3'  v-if="window == 3"></Hair>
          </transition-group>
          <div class="bottom">
            <main-button :hoverBG="'#615DFA'" :color="'white'"  @click.native="$store.dispatch('CREATE__CHARACTER')">Создать персонажа</main-button>
            <main-button
            :color="window == 1 ? '#8787A4' : '#A4A4C2'"
            :disabled="window == 1"
            :border="'1px solid #EFF0F6'"
            :background="window == 1 ? 'rgba(164, 164, 194, .25)' : 'transparent'"
            :hoverBG="'rgba(164, 164, 194, .25)'"
            :hoverBorder="'1px solid rgba(164, 164, 194, .25)'"
            :paddings="'18px 40px'"
            style="max-width: 220px; margin: auto; margin-top: 18px"
            @click.native="window === 1 ? false : window--"
            >Вернуться назад</main-button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import Family from "../../components/CC/Family.vue";
import Face from "../../components/CC/Face.vue";
import Hair from "../../components/CC/Hair.vue";

export default {
  name: "CCP",
  components: {
    Family,
    Face,
    Hair,
  },
  data() {
    return {
      window: 1,
    };
  },
  computed: {
    getStateInfo() {
      let storeInfo = this.$store.getters.nowaible;
      let fatherIMG = storeInfo.arrays.fathers[storeInfo.father];
      let motherIMG = storeInfo.arrays.mothers[storeInfo.mother];
      //      let fatherIMG = storeInfo.father
      // let motherIMG = storeInfo.mother
      return {
        fatherIMG,
        motherIMG,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/CC/styles.less";
.slide-components-enter-active {
  transition: all 0.2s ease;
  width: 100%;
}
.slide-components-leave-active {
  transition: all 0.2s ease;
  position: absolute;
  top: 0;left: 0;
  width: 100%;
}
.slide-components-enter, .slide-components-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  // display: none;
  opacity: 0;
    width: 100%;
}
.slide{
  display: flex;
}
.content{
  position: relative;
}
</style>