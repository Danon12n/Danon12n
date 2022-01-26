<template>
  <div id="CH-root">
<!--     modals -->
    <div class="circle">
      <circleComp :shadow="true" :size="366" :step="211" :color="'#32CFF5'" ></circleComp>
    </div>
    <transition mode="out-in" name="fade">
      <modal
          @triggerServer="triggerServer"
        @modal="$store.commit('hideVipModal')"
        v-if="$store.state.RAF.APP__SETTINGS.vipModal.show"
        :modal="modal"
      ></modal>
    </transition>
    <!-- create new character -->
    <transition name='createCharacter'>
    <CreateCharacter  :selectedSlot="createCharacter.selectedSlot" @closeCreateCharacter='createCharacter.show = false' v-if="createCharacter.show"></CreateCharacter>
    </transition>
    <!-- cards of profiles -->
    <transition name='createCharacter'>
    <cards
      @modal="modalShow"
      @createCharacter="createCharacterEmit"
      v-if="!createCharacter.show"
    ></cards>
     </transition>
  </div>
</template>

<script>
import CreateCharacter from "./CreateCharacter.vue";
import modal from "./Modal.vue";
import cards from "./cards.vue";
import circleComp from "../GLOBAL/circle.vue";

export default {
  name: "Select-Character",
  components: {CreateCharacter, modal, cards, circleComp },
  data() {
    return {
      modal: {
        header: false,
        body: false,
        buttonText: false,
      },
      createCharacter: {
        show: false,
        selectedSlot: null,
      },
    };
  },
  methods: {
    modalShow(prop) {
      this.$store.commit('hideVipModal', prop)
      this.modal = prop;
    },
    triggerServer(info) {
      console.log("triggerServer");
      console.log(info[0])
      console.log(info[1])
      if(info[1] === 'unic'){
        console.log(info[0], info[2], info[3], info[4])
        console.log(info[2])
        window.mp.trigger(info[0], info[2], info[3], info[4])
        return;
      }
      window.mp.trigger(info[0], info[1])
      console.log(info[1])
    },
    createCharacterEmit(selectedSlot){
      this.createCharacter.selectedSlot = selectedSlot
      // this.$store.commit('hideVipModal')
      this.createCharacter.show = true
      console.log(selectedSlot)
    }
  },
};
</script>

<style lang="less" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
@import "../../assets/SelectCharacter/characters.less";

.slide-components-enter-active {
  transition: all 0.2s ease;
}
.slide-components-leave-active {
  transition: all 0.2s ease;
}
.slide-components-enter, .slide-components-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter, .createCharacter-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}


// 

.createCharacter-enter-active {
  transition: all 0.2s ease;
}
.createCharacter-leave-active {
  transition: all 0.2s ease;
}
.createCharacter-enter, .createCharacter-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-29px);
}


 //circle animation


@keyframes circleAnim {
  from {
    left: -100px;
    opacity: 0;
  }
  to {
    left: -500px;
    opacity: 1;
  }


}

.circle{
  position: absolute;
  animation-duration: 1s;
  animation-name: circleAnim;
  left: -500px;
  z-index: 1;
}

.ch__wrapper{
  z-index: 3;
}


@media screen and (max-height: 792px) {
  .circle{
    transform: scale(0.8)
  }
}
@media screen and (max-height: 638px) {
  .circle{
    transform: scale(0.5)
  }
}
</style>