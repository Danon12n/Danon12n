<template>
    <div class="modals">
      <div class="buy__vip" v-show='$store.state.RAF.APP__SETTINGS.vipModal.show'>
       <div class="buy__wrapper">
          <b>{{modal.header}}</b>
        <p class='body'>{{modal.body}}</p>
        <button class='modal__button buy' @click='$emit("triggerServer", modal.methodArgs)'><p :class='{slot: modal.header == "VIP - Слот"
}'>{{modal.buttonText}}</p></button>
        <button class='modal__button close' @click='$store.commit("hideVipModal", false)'>Назад</button>
       </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            modal: {
              type: Object,
            }
        },
        computed: {
            foo() {
                return this.data 
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../../assets/SelectCharacter/characters.less';
</style>