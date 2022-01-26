<template>
  <div id="root__family">
    <div class="select hair">
      <button @click='Component_Settings[HairSettings.hairGenderFix] == 0  ? Component_Settings[HairSettings.hairGenderFix] = arrays[HairSettings.hairCount].length-1 : Component_Settings[HairSettings.hairGenderFix]-- ,changeInfo[HairSettings.hairTo] = Component_Settings[HairSettings.hairGenderFix]' >
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
      <p>{{arrays[HairSettings.hairCount][Component_Settings[HairSettings.hairGenderFix]]}}</p>
      <button @click='Component_Settings[HairSettings.hairGenderFix] == arrays[HairSettings.hairCount].length-1 ? Component_Settings[HairSettings.hairGenderFix] = 0 : Component_Settings[HairSettings.hairGenderFix]++,changeInfo[HairSettings.hairTo] = Component_Settings[HairSettings.hairGenderFix]'>
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
        <!-- ! -->
 <div class="select hairColor">
      <button @click='Component_Settings.eyeColor_count == 0 ? Component_Settings.eyeColor_count = arrays[4].length : Component_Settings.eyeColor_count--, changeInfo.hairColor = Component_Settings.eyeColor_count' >
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
      <p>{{arrays[4][Component_Settings.eyeColor_count]}}</p>
      <button @click='Component_Settings.eyeColor_count == arrays[4].length-1 ? Component_Settings.eyeColor_count = 0 : Component_Settings.eyeColor_count++, changeInfo.hairColor = Component_Settings.eyeColor_count'>
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
<!-- ! -->
    <div class="select eyebrows">
      <button @click='Component_Settings.eyebrows_count == 0 ? Component_Settings.eyebrows_count = arrays[2].length-1 : Component_Settings.eyebrows_count--, changeInfo.eyebrows = Component_Settings.eyebrows_count' >
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
      <p>{{arrays[2][Component_Settings.eyebrows_count]}}</p>
      <button @click='Component_Settings.eyebrows_count == arrays[2].length-1 ? Component_Settings.eyebrows_count = 0 : Component_Settings.eyebrows_count++, changeInfo.eyebrows = Component_Settings.eyebrows_count'>
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
<!-- ! -->
 <div class="select beard" v-if='changeInfo.gender == 1'>
      <button @click='Component_Settings.beard_count == 0 ? Component_Settings.beard_count = arrays[3].length -1 : Component_Settings.beard_count--, changeInfo.beard = Component_Settings.beard_count' >
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
      <p>{{arrays[3][Component_Settings.beard_count]}}</p>
      <button @click='Component_Settings.beard_count == arrays[3].length-1 ? Component_Settings.beard_count = 0 : Component_Settings.beard_count++, changeInfo.beard = Component_Settings.beard_count' >
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
    <div class="select beardColor"  v-if='changeInfo.gender == 1'>
      <button @click='Component_Settings.beardColor_count--, changeInfo.beardColor = Component_Settings.beardColor_count' :disabled='Component_Settings.beardColor_count == 0'>
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
      <p>{{arrays[4][Component_Settings.beardColor_count]}}</p>
      <button @click='Component_Settings.beardColor_count++, changeInfo.beardColor = Component_Settings.beardColor_count' :disabled='Component_Settings.beardColor_count == arrays[4].length -1'>
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
  </div>
  <!-- Не пытайтесь читать этот код, просто, примером его является: Вывести userInfo.hairM, которое еще и уникальное -->
</template>

<script>
export default {
  data() {
    return {
      arrays:[
        [
"Нет",
"Стрижка",
"Искусственный ястреб",
"Хипстер",
"Боковой пробор",
 "Укороченная стрижка",
"Байкер",
"Конский хвост",
"Косички",
"Зализанный",
"Коротко причесанный",
"Колючий",
"Цезарь",
 "Обрезанные",
"Дреды",
"Длинные волосы",
 "Лохматые Кудри",
 "Серфингист",
 "Короткий Боковой Части",
 "Высоко Зачесанными Стороны",
 "Долго Зализаны",
 "Хипстерской Молодежи",
"Кефаль",
 "Классические Косички",
 "Палм Косички",
 "Молния Косички",
 "Взбитые Косички",
 "Зиг-Заг Косички",
 "Улитка Косички",
"Hightop",
 "Свободно Отброшены Назад",
 "Подрез Отброшены Назад",
 "Подрез Прокатилась Сторону",
 "Шипованный Ирокез",
"Мод",
 "Слоистая Мода",
"Ежик",
 "Прокат Метелка",
 ],
      [
"Нет",
"Короткий",
"Слоистый Боб",
"Косички",
"Конский хвост",
 "Заплетенный Ирокез",
"Косы",
"Боб",
"Искусственный Ястреб",
"Французский поворот",
"Длинный Боб",
"Свободно завязанный",
"Пикси",
 "Сбрил Челку",
 "Верхний Узел",
 "Волнистый Боб",
 "Пучок",
 "Девушка С Обложки",
 "Плотный Пучок",
 "Закрученный Боб",
 "Хлопушки Боб",
 "Большой Взрыв",
 "Плетеный Топ Узел",
"Кефаль",
 "Ущипнул Косички",
 "Лист Косички",
 "Зиг-Заг Косички",
 "Челки Косичку",
 "Волна Косы",
 "Катушки Косы",
 "Прокат Метелка",
 "Свободно Отброшены Назад",
 "Подрез Отброшены Назад",
 "Подрез Прокатилась Сторону",
 "Шипованный Ирокез",
 "Бандана и тесьма",
 "Слоистая Мода",
"Секс",
 ],
    /*eyebrows*/["Нет", "Сбалансированный", "Модный", "Клеопатра", "Загадочный", "Женщина", "Соблазнительный", "Зажатый", "Чола", "Триумф", "Беззаботный", "Пышный", "Грызун", "Двойной трамвай", "Тонкий", "Карандашный", "Мать-щипач", "Прямой и узкий", "Естественный", "Пушистый", "Неопрятный", "Гусеница", "Обычный", "Средиземноморский", "Ухоженный", " Бушели", "Пернатый", "Колючий", "Однобровый", "Крылатый", "Тройной трамвай", "Арочный трамвай", "Вырезы", "Исчезающий", "Сольный трамвай"],
    /*beard*/  ["Нет", "Легкая щетина", "Бальбо", "Круглая борода", "Козлиная бородка", "Подбородок", "Пушок на подбородке", "Ремешок для подбородка", "Неряшливый", "Мушкетер", "Усы", "Подстриженная борода", "Щетина", "Тонкая круглая борода", "Подкова", "Карандаш и Отбивные", "Борода для подбородка", "Бальбо и Бакенбарды", "Бараньи отбивные", "Неряшливая борода", "Кудрявый", "Кудрявый и глубокий незнакомец ", "Руль", "Фаустик", "Отто и Патч", "Отто и Полный незнакомец", "Светлый Франц", "Хэмпстед", "Амброуз", "Занавес Линкольна"],
    /*hairColor*/    ["Черный", "Акулий", "Серо-чёрный", "Темно-коричневый", "Кофейно-коричневый", "Коричневый", "Кофейный", "Кофейный-2", "Курево-кофейный", "Пастельно-коричневый", "Серна", "Сандалии", "Сандалии-2", "Шелуховый", "Древесный", "Брэндовый", "Тёмно-серневый", "Железно-каменный", "Органово-красный", "Вишнёвый", "Палисандровый"]
      ],
      Component_Settings:{
        hairM_count: 0,
        hairF_count: 0,
        eyebrows_count: 0,
        beard_count: 0,
        hairColor_count: 0,
        beardColor_count: 0,
        eyeColor_count: 0
      }
    };
  },
  computed: {
    changeInfo() {
      return new Proxy(this.$store.state.RAF.CreateCharacterSettings, {
        set: (target, key, val) => {
          this.$store.commit("setCharacterInfo", { [key]: val });
          this.$store.dispatch("USER_NEW_CHARACTER_SETTINGS", { key, val });
          return true;
        },
      });
    },
    HairSettings(){
      return{
        hairCount: this.changeInfo.gender == 1 ? 0 : 1,
        hairTo: this.changeInfo.gender == 1 ? 'hairM' : 'hairF',
        hairGenderFix: this.changeInfo.gender == 1 ? 'hairM_count' : 'hairF_count'
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/CC/Select.less";
</style>