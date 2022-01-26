<template>
  <div id="root__family">
    <div class="range eyeScale">
      <div class="range__content">
        <p>Больш.</p>
         <ChekunovSlider v-model="changeInfo.eyeScale" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range noseWidth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.noseWidth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range noseHeight">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.noseHeight" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range noseTipLength">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.noseTipHeight" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range noseDepth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.noseDepth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range noseBroke">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.noseBroke" :max='1'/>

        <p>Меньш.</p>
      </div>
    </div>
    <div class="range eyebrowHeight">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.eyebrowHeight" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range eyebrowDepth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.eyebrowDepth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range cheekboneWidth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.cheekboneWidth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range cheekDepth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.cheekDepth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range lipThickness">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.lipThickness" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range jawWidth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.jawWidth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range jawShape">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.jawShape" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range chinHeight">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.chinHeight" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range chinDepth">
      <div class="range__content">
        <p>Больш.</p>
         <ChekunovSlider v-model="changeInfo.chinDepth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range chinWidth">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.chinWidth" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range chinIndent">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.chinIndent" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>
    <div class="range neck">
      <div class="range__content">
        <p>Больш.</p>
        <ChekunovSlider v-model="changeInfo.neck" :max='1'/>
        <p>Меньш.</p>
      </div>
    </div>

  </div>
</template>

<script>
import ChekunovSlider from "@/components/global-input.vue"
export default {
  components: {
    ChekunovSlider,
  },
  computed: {
    changeInfo() {
      return new Proxy(this.$store.state.RAF.CreateCharacterSettings, {
        set: (target, key, val) => {
          this.$store.commit("setCharacterInfo", { [key]: val });
          console.log(target, key, val);
          this.$store.dispatch("USER_NEW_CHARACTER_SETTINGS", { key, val });
          return true;
        },
      });
    },
  },

};
</script>

<style lang="less" scoped>
@import "../../assets/CC/Select.less";
</style>