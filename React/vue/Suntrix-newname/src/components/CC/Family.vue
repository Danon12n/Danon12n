<template>
  <div id="root__family">
    <div class="select father">
      <button
        @click="changeInfo.father == 0 ? changeInfo.father = changeInfo.arrays.fathers.length-1 : changeInfo.father--"

      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM16 7L0.999999 7L0.999999 9L16 9L16 7Z"
            fill="white"
          />
        </svg>
      </button>
      <p>{{ $store.state.RAF.CreateCharacterSettings.arrays.fathers[$store.state.RAF.CreateCharacterSettings.father].name }}</p>
      <button
        @click="changeInfo.father == changeInfo.arrays.fathers.length-1 ? changeInfo.father = 0 : changeInfo.father++"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div class="select mother">
      <button
        @click="changeInfo.mother == 0 ? changeInfo.mother = changeInfo.arrays.mothers.length-1 : changeInfo.mother--"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM16 7L0.999999 7L0.999999 9L16 9L16 7Z"
            fill="white"
          />
        </svg>
      </button>
      <p>{{ $store.state.RAF.CreateCharacterSettings.arrays.mothers[$store.state.RAF.CreateCharacterSettings.mother].name }}</p>
      <button
        @click="changeInfo.mother == changeInfo.arrays.mothers.length-1 ? changeInfo.mother = 0 : changeInfo.mother++"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div class="select gender">
      <button @click="selectGender(true), window.mp.trigger('cefC::characterGender', true)">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM16 7L0.999999 7L0.999999 9L16 9L16 7Z"
            fill="white"
          />
        </svg>
      </button>
      <p>{{ globalOptions.gender }}</p>
      <button @click="selectGender(false), window.mp.trigger('cefC::characterGender', false)">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div class="range sim">
      <div class="range__content">
        <p>Мать</p>
          <ChekunovSlider :value='changeInfo.sim' v-model="changeInfo.sim" :min='-1'  :max='1'/>
        <p>Отец</p>
      </div>
    </div>
    <div class="range pelt">
      <div class="range__content">
        <p>Мать</p>
        <ChekunovSlider :min='-1' :value='changeInfo.skin' v-model="changeInfo.skin" :max='1'/>
        <p>Отец</p>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlideBar from 'vue-slide-bar'
import ChekunovSlider from "@/components/global-input.vue"
export default {
   components: {
    ChekunovSlider
  },
  data() {
    return {
      value2: 8,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: 'red'
        }
      },
      rangeValues: {
        similar: 0,
        skin: 0,
      },
      CharacterSettings: {
        father_count: 0,
        mother_count: 0,
        gender: 1,
      },
      arrays: {
        mothers: [
          "Hannah",
          "Aubrey",
          "Jasmine",
          "Gisele",
          "Amelia",
          "Isabella",
          "Zoe",
          "Ava",
          "Camila",
          "Violet",
          "Sophia",
          "Evelyn",
          "Nicole",
          "Ashley",
          "Gracie",
          "Brianna",
          "Natalie",
          "Olivia",
          "Elizabeth",
          "Charlotte",
          "Emma",
          "Misty",
        ],
        fathers: [
          "Benjamin",
          "Daniel",
          "Joshua",
          "Noah",
          "Andrew",
          "Juan",
          "Alex",
          "Isaac",
          "Evan",
          "Ethan",
          "Vincent",
          "Angel",
          "Diego",
          "Adrian",
          "Gabriel",
          "Michael",
          "Santiago",
          "Kevin",
          "Louis",
          "Samuel",
          "Anthony",
          "Claude",
          "Niko",
          "John",
        ],
      },
    };
  },
  methods: {
    selectGender(meth){
      if(meth === true){
        if(this.$store.state.RAF.CreateCharacterSettings.gender === meth){
          this.changeInfo.gender = false
          return;
        }
        this.changeInfo.gender = true
      }else{
        if(this.$store.state.RAF.CreateCharacterSettings.gender === meth){
          this.changeInfo.gender = true
          return;
        }
        this.changeInfo.gender = false
      }
    },
    
    startLoad () {
      this.loader = setInterval(() => {
        this.loading++
        if (this.loading === 100) {
          console.log('clear', this.loading)
          clearInterval(this.loader)
        }
      }, 100)
    }

  },
  computed: {
    globalOptions() {
      return {
        father: this.$store.state.RAF.CreateCharacterSettings.arrays.fathers[this.CharacterSettings.father_count],
                // father: fыather_count,
        mother: this.$store.state.RAF.CreateCharacterSettings.arrays.mothers[this.CharacterSettings.mother_count],
        gender:
          this.$store.getters.nowaible.gender == 1 ? "Мужской" : "Женский",
      };
    },
    changeInfo() {
      return new Proxy(this.$store.state.RAF.CreateCharacterSettings, {
        set: (target, key, val) => {
          this.$store.commit("setCharacterInfo", { [key]: val });
          this.$store.dispatch("USER_NEW_CHARACTER_SETTINGS", { key, val });
          // let number = ((val - -1) / (2 - -1)) * 145;
          // if (key != "gender") {
          //   this.$refs[
          //     key
          //   ].style.background = `linear-gradient(to right, #547AFF 0%, #547AFF ${
          //     number + 2
          //   }%, #D8DBEB ${number + 2}%, #D8DBEB 100%)`;
          // }
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