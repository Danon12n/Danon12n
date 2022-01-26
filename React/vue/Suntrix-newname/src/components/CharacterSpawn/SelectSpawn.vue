<template>
    <div id='spawn__root'>
      <transition name="fade" mode="out-in">
        <div class="bg" :style="{background: Background}" :key="Background"></div>
      </transition>
      <div class="spawn__wrapper">
        <b>Выберите место спавна</b>
        <div class="cards">
          <div class="spawn__card last" :class="{firstAnimate: spawnChoice == 0}"    @mouseover="has.lastExit ? selected = 0 : false" :style="{opacity: selected === 0 && has.lastExit ? 1 : .5, visibility: spawnChoice == 0 || spawnChoice == null ? 'visible' : 'hidden'}" @click="selectSpawn(0)">
           <CircleComp @click="spawnChoice = 1" :playWhite="t"  :playSVG="selected === 0 && has.lastExit ? true : false" style="transform: rotate(180deg)"  :color="selected === 0 && has.lastExit ? '#C2F532' : '#FFFFFF'"  :size="175" :step="100"></CircleComp>
          </div>
           <div class="spawn__card fraction" :class="{secondAnimate: spawnChoice == 1}"     @mouseover="has.fraction ? selected = 1 : false" :style="{opacity: selected === 1 && has.fraction ? 1 : .5, visibility: spawnChoice == 1 || spawnChoice == null ? 'visible' : 'hidden'}"  @click="selectSpawn(1)">
            <CircleComp @click="spawnChoice = 2"  :playWhite="t"  :playSVG="selected === 1 && has.fraction ? true : false" style="transform: rotate(180deg)"  :color="selected === 1 && has.fraction ? '#C2F532' : '#FFFFFF'" :size="175" :step="100"></CircleComp>
          </div>
          <div class="spawn__card home" :class="{thirdAnimate: spawnChoice == 2}"   @mouseover="has.house ? selected = 2 : false" :style="{opacity: selected ===  2 && has.house ? 1 : .5, visibility: spawnChoice == 2 || spawnChoice == null ? 'visible' : 'hidden'}" @click="selectSpawn(2)">
            <CircleComp :playWhite="t" :playSVG="selected === 2 && has.house? true : false" style="transform: rotate(180deg)"  :color="selected === 2  && has.house ?  '#C2F532' : '#FFFFFF'" :size="sizeStep" :step="100"></CircleComp>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          spawnChoice: null,
          selected: null,
          t: false
        }
      },
      computed: {
        Background() {
          if(this.selected === 0){
            return 'linear-gradient(91.3deg,rgba(24, 11, 44, 0.79) 2.63%, rgba(13, 5, 26, 0.35) 98.89%), url(https://i.yapx.ru/PN2oE.png)'
          }else if(this.selected === 1){
            return 'linear-gradient(91.3deg,rgba(24, 11, 44, 0.79) 2.63%, rgba(13, 5, 26, 0.35) 98.89%), url(https://i.yapx.ru/PN1Wi.png)'
          }else if(this.selected === 2){
            return 'linear-gradient(91.3deg,rgba(24, 11, 44, 0.79) 2.63%, rgba(13, 5, 26, 0.35) 98.89%), url(https://i.yapx.ru/PN2dN.png)'
          }else{
            return 'linear-gradient(91.3deg,rgba(24, 11, 44, 0.79) 2.63%, rgba(13, 5, 26, 0.35) 98.89%)'
          }
        },
        sizeStep(){
          if(window.innerWidth <= 1514){
            return 100
          }else{
            return 170
          }
        },
        has(){
          return this.$store.state.RAF.userInfo_global
        },
      },
      methods: {
        selectSpawn(n) {
          this.spawnChoice = n
          console.log('asd')
          setTimeout(() => {
            this.t = true
            console.log('caal')
          }, 300)
          this.$store.dispatch('SPAWN__USER', n)
        }
      },
    }
</script>

<style lang="less" scoped>
@import '../../assets/SelectCharacter/style.less';
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>