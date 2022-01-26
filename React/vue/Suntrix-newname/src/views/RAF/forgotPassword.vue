<template>
  <div id="root__reg__auth" class="forgot__password">
    <div class="form">
    <div  v-if="windowBoot === 0" class="form__wrapper reg__overflow">
      <div class="form__title">
        <img src="../../assets/RAF/img/gachi.gif" alt="" />
        <b>Восстановление пароля</b>
      </div>
      <div class="inputs__form">
        <div class="input__form login__from">
          <input
              type="text"
              id="login"
              v-model="$store.state.RAF.userInfo.login"
          />
          <div
              class="label__immitate"
              :class="{
                active__immitate:
                  this.$store.state.RAF.userInfo.login.length != 0,
              }"
          >
            Логин
          </div>
        </div>
      </div>
      <main-button @click.native="$store.dispatch('USER__SAVE')" :hoverBG="'#615DFA'">Восстановить</main-button>
      <div class="other__buttons">
        <main-button :paddings="'18px 41px'" :color="'#a4a4c2'" :hoverBorder="'1px solid #eff0f6'" :border="'1px solid #eff0f6'" :background="'transparent'"  @click.native="$router.push('/auth')">Назад</main-button>
      </div>
    </div>


    <div  class="resetPassWindow form__wrapper" v-if="windowBoot === 1">
      <div class="form__title">
        <b>Восстановление пароля</b>
        <p>Код восстановения был отправлен на почту привязанную к этому аккаунту</p>
      </div>
      <div class="inputs__form">
        <div class="input__form password__from">
<!--я тут -->
          <input type="text" placeholder="Введите код" maxlength="6" v-model="code">
        </div>
        <div class="buttons">
          <main-button  @click.native="resetPassCode()" :hoverBG="code.length === 6 ? '#615DFA' : '#FBFBFF'" :background="code.length === 6 ? '#615DFA' : '#FBFBFF'" :color="code.length === 6 ? 'white' : '#a4a4c2'">Далее</main-button>
          <main-button  style="margin-top: 10px;"  :paddings="'18px 41px'" :background="'transparent'"  :border="'1px solid #EFF0F6'"  :hoverBorder="'1px solid rgba(164, 164, 194, .25)'" :color="'#a4a4c2'" @click.native="windowBoot = 0">Назад</main-button>
        </div>
      </div>
    </div>



    </div>
  </div>
</template>

<script>
//text
export default {
  name: "forgot-password",
  data() {
    return {
      code: ''
    }
  },
  methods: {
    resetPassCode() {
      console.log('ввёл код', this.code)
      window.mp.trigger('cefC::restorepass', this.windowBoot,this.code)
    },

  },
  computed: {
    windowBoot: {
      get(){
        return this.$store.state.RAF.APP__SETTINGS.resetPass
      },
      set(v){
        this.$store.commit('resetPassMutation', v)
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/RAF/Log_X_Reg.less";
.slide-pass-enter-active {
  transition: all 0.2s ease;
}
.slide-pass-leave-active {
  transition: all 0.2s ease;
}
.slide-pass-enter, .slide-pass-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(30px);
  // display: none;
  opacity: 0;
}
.buttons{
  display: flex;
  flex-direction: column;
}
.form__title p{
  padding-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #8B8FA4;
  max-width: 260px;
}
</style>
