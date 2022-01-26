<template>
<div id="notify__root">
  <div class="notify" @click="$store.commit('showNotify', false)">
    <div class="notify__wrapper">
      <CircleComp :color="circleColor" :step="15" :size="25"></CircleComp>
      <div class="content">
        <b>{{$store.getters.NotifyInfo.title}}</b>
        <p v-html="keyOnString.result">{{$store.getters.NotifyInfo.body}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CircleComp from './circle'

export default {
  name: "Notify",
  components: {
    CircleComp,
  },
  computed: {
    message(){
      return this.$store.getters.NotifyInfo
    },
    circleColor(){
      if(this.$store.getters.NotifyInfo.type == 'Error'){
        return '#FF5C46'
      }else if(this.$store.getters.NotifyInfo.type == 'Success'){
        return 'linear-gradient(181.42deg, #C2F532 1.21%, #C2F532 61.62%)'
      }else if(this.$store.getters.NotifyInfo.type == 'Info'){
        return '#32CFF5'
      } else{
        return '#FA965D'
      }
    },
    keyOnString(){
      const words = [...this.message.body.matchAll(/&(?<word>[^&]+)/g)].map(match => match[1])
      let exitStr = this.message.body.replace(/&+/g, '')
      let result = `${exitStr.replace(words[0], `<span style="padding: 1px 5px;  color: #656565;  background-color: #fff; border-radius: 3.66667px;">${words[0]}</span>`)}`
      return {
        newStr: exitStr,
        rgx: words,
        result
      }
    }
  },

}
</script>

<style lang="less" scoped>
  #notify__root{
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index:1;
    cursor: pointer;
    user-select: none;
    display: flex;
  .notify{
    margin: 0 auto;
    max-width: 444px;
    width:100%;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.25));
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    .notify__wrapper{
      padding: 15px 20px;
      display: flex;
      align-items: flex-start;
      .content{
        padding-left: 20px;
      }
      b{
        font-weight: 800;
        font-size: 20px;
        line-height: 25px;
        color: #FFFFFF;
        text-shadow: 0px 0px 2.33036px rgba(0, 0, 0, 0.2);
        text-transform:uppercase;
      }
      p{
        padding-top: 5px;
        max-width: 329px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.6);
        text-shadow: 0px 0px 2.33036px rgba(0, 0, 0, 0.2);
      }


    }
  }
  }

</style>