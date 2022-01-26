<template>
    <div class="create__new__character">
        <div class="cnc__wrapper">
          <b>Создание нового персонажа</b>
          <div class="inputs">
            <div class="cnc__input name">
              <input type="text" placeholder='Ivan' maxlength="24"  @keypress="isLetter($event)" v-model='name'>
            </div>
             <div class="cnc__input family">
              <input type="text" placeholder="Ivanov" maxlength="24"  @keypress="isLetter($event)" v-model='family'>
            </div>
          </div>
          <button class='next' @click='sendNewChar()'>Перейти к настройке внешности</button>
          <button class='wbg' @click='$emit("closeCreateCharacter")'>Назад</button>
        </div>
        <div class="message">
          <div class="message__wrapper">
            <!-- <img src="../../assets/SelectCharacter/img/prompt.svg" alt=""> -->
            <circleComp :pulse="true" style='transform: rotate(180deg);' :shadow='false' :size='107' :step='61' :color='"linear-gradient(181.42deg, rgba(194, 245, 50, 0.17) 1.21%, #C2F532 61.62%)"'></circleComp>
            <div class="text">
              <b>Подсказка</b>
              <p>Имя и фамилия персонажа должно быть на английском языке</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import circleComp from '../GLOBAL/circle.vue'
    export default {
        name: 'createNewCharacter',
        components: {
          circleComp,
        },
      props: {
        selectedSlot: {
          type: Number,
        },
      },
        data() {
            return {
                name: '', // ЗАДАТЬ ВОПРОС ПРО ЭТИ КЛЮЧИ
                family: '',
            }
        },
        methods: {
          debug(){
            console.log(this.name, this.family, this.selectedSlot)
          },
          sendNewChar(){
            let selectedSlot = this.selectedSlot
            let name = this.name
            let family = this.family
            console.log(name)
            console.log(family)
            console.log(selectedSlot)
            window.mp.trigger("cefC::newChar", selectedSlot, name, family)
          },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z]+$/.test(char)) return true;
      else e.preventDefault();
    }
        },
    }
</script>

<style lang="less" scoped>
 @import '../../assets/SelectCharacter/characters.less';
 .create__new__character{
   z-index: 3;
 }
</style>