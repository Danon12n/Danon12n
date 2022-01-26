<template>
  <div class="ch__wrapper">
    <!-- character/s card/'s -->
    <transition name="slide-fade" mode="out-in">
      <b :key="title" class="ch__title">{{ title }}</b>
    </transition>
    <div class="mg">
      <!-- USER DON'T HAVE CHARACTERS -->
      <div
        class="profile__card dhc"
        :class="{
          wactive: selected != null,
          opacity: selected !== 'create' && selected != null,
          third: selected === 'create' && selected === 'create',
        }"
        v-if="getter[0].InfoCreate === -1"
      >
        <div class="card__wrapper">
          <b>Свободный слот</b>
          <div class="buttons">
            <div v-on:click="$emit('createCharacter', 1)">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="9"
                  transform="matrix(-1 0 0 1 60 0)"
                  fill="#615DFA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.4427 19.044C38.156 19.1011 37.8248 19.2411 37.5639 19.4154C37.4287 19.5058 35.3704 21.532 32.9 24.0067C28.7584 28.1554 28.4752 28.4489 28.4316 28.6379C28.406 28.7489 28.2985 29.5779 28.193 30.4801L28.0009 32.1205L28.1273 32.3788C28.2682 32.6668 28.5284 32.8699 28.8179 32.9178C28.9115 32.9333 29.7005 32.8588 30.6478 32.7451C31.947 32.5892 32.3511 32.5255 32.486 32.4555C32.5891 32.402 34.4535 30.5667 37.1011 27.9126C41.1983 23.8053 41.5542 23.4366 41.684 23.1656C42.0658 22.3683 42.046 21.5661 41.6233 20.7098C41.4575 20.3739 41.3448 20.2187 41.0507 19.9214C40.7485 19.616 40.6099 19.5145 40.2585 19.341C39.6394 19.0356 39.0052 18.9318 38.4427 19.044ZM39.3525 21.0223C39.7738 21.2262 40.0316 21.614 40.0334 22.0462L40.0343 22.2918L35.8309 26.4967L31.6274 30.7016L30.8706 30.792C30.4543 30.8418 30.1054 30.8741 30.0951 30.864C30.085 30.8537 30.1184 30.505 30.1695 30.0891L30.2625 29.3328L34.3302 25.2596C36.5674 23.0193 38.4765 21.1278 38.5727 21.0563C38.7906 20.8943 39.0636 20.8824 39.3525 21.0223ZM21.2485 21.9371C20.1994 22.164 19.2946 23.0772 19.0739 24.132C18.9754 24.6031 18.9754 39.2186 19.0739 39.6897C19.2446 40.5056 19.8309 41.2619 20.5788 41.631C21.2702 41.9723 20.774 41.9522 28.5472 41.9531C36.2638 41.954 35.8788 41.9681 36.5148 41.6616C37.2395 41.3124 37.7996 40.6386 38.0445 39.8214C38.1177 39.5771 38.1255 39.2392 38.1397 35.7061C38.1571 31.334 38.1708 31.5262 37.8196 31.2025C37.4744 30.8844 37.057 30.8499 36.6528 31.1062C36.4971 31.2049 36.4148 31.2998 36.3336 31.4742L36.2243 31.7091L36.2228 35.4977C36.2215 39.0647 36.2166 39.2967 36.1397 39.466C36.0377 39.6906 35.784 39.9171 35.5628 39.9812C35.4433 40.0157 33.3683 40.0261 28.463 40.0168L21.5322 40.0036L21.3567 39.881C21.2602 39.8136 21.1308 39.684 21.0691 39.5929L20.957 39.4273L20.9454 31.9556L20.9338 24.4838L21.0385 24.2855C21.0962 24.1764 21.2292 24.0266 21.3342 23.9526L21.5251 23.8181L25.9075 23.7957L30.2898 23.7733L30.5104 23.6386C30.9627 23.3624 31.1114 22.7472 30.829 22.3206C30.7624 22.2199 30.6238 22.0819 30.521 22.0139L30.3341 21.8902L25.937 21.8821C22.3049 21.8755 21.4892 21.885 21.2485 21.9371Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="profile__card"
        v-for="(card, index) in filteredCards"
        :key="index"
        :class="{
          active: selected === card,
          noBlock: card.block === false,
          opacity: selected !== card && selected != null,
          second: getter.indexOf(card) === 1 && selected === card,
          third: getter.indexOf(card) === 3 && selected === card,
        }"
      >
        <div class="card__wrapper">
          <b>{{ spliceNames[filteredCards.indexOf(card)] }}</b>
          <div class="buttons">

              <svg
                  class="delete"
                  @click="
                showModal(
                  'Удаление персонажа',
                  `Вы точно хотите удалить персонажа ${card.nick} ?`,
                  [
                    'cefC::delChar',
                    'unic',
                    getter.indexOf(card) + 1,
                    card.nick,
                    123,
                  ],
                  'Удалить'
                )
              "
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.15"
                  x="0.5"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="11.5"
                  stroke="#FA5D5D"
                />
                <path
                  d="M28 36C28.2652 36 28.5196 35.8946 28.7071 35.7071C28.8946 35.5196 29 35.2652 29 35V29C29 28.7348 28.8946 28.4804 28.7071 28.2929C28.5196 28.1054 28.2652 28 28 28C27.7348 28 27.4804 28.1054 27.2929 28.2929C27.1054 28.4804 27 28.7348 27 29V35C27 35.2652 27.1054 35.5196 27.2929 35.7071C27.4804 35.8946 27.7348 36 28 36ZM38 24H34V23C34 22.2044 33.6839 21.4413 33.1213 20.8787C32.5587 20.3161 31.7956 20 31 20H29C28.2044 20 27.4413 20.3161 26.8787 20.8787C26.3161 21.4413 26 22.2044 26 23V24H22C21.7348 24 21.4804 24.1054 21.2929 24.2929C21.1054 24.4804 21 24.7348 21 25C21 25.2652 21.1054 25.5196 21.2929 25.7071C21.4804 25.8946 21.7348 26 22 26H23V37C23 37.7956 23.3161 38.5587 23.8787 39.1213C24.4413 39.6839 25.2044 40 26 40H34C34.7956 40 35.5587 39.6839 36.1213 39.1213C36.6839 38.5587 37 37.7956 37 37V26H38C38.2652 26 38.5196 25.8946 38.7071 25.7071C38.8946 25.5196 39 25.2652 39 25C39 24.7348 38.8946 24.4804 38.7071 24.2929C38.5196 24.1054 38.2652 24 38 24ZM28 23C28 22.7348 28.1054 22.4804 28.2929 22.2929C28.4804 22.1054 28.7348 22 29 22H31C31.2652 22 31.5196 22.1054 31.7071 22.2929C31.8946 22.4804 32 22.7348 32 23V24H28V23ZM35 37C35 37.2652 34.8946 37.5196 34.7071 37.7071C34.5196 37.8946 34.2652 38 34 38H26C25.7348 38 25.4804 37.8946 25.2929 37.7071C25.1054 37.5196 25 37.2652 25 37V26H35V37ZM32 36C32.2652 36 32.5196 35.8946 32.7071 35.7071C32.8946 35.5196 33 35.2652 33 35V29C33 28.7348 32.8946 28.4804 32.7071 28.2929C32.5196 28.1054 32.2652 28 32 28C31.7348 28 31.4804 28.1054 31.2929 28.2929C31.1054 28.4804 31 28.7348 31 29V35C31 35.2652 31.1054 35.5196 31.2929 35.7071C31.4804 35.8946 31.7348 36 32 36Z"
                  fill="#FA5D5D"
                />
              </svg>


              <svg
                  class="next"
                  @click="
                selected === card
                  ? ((selected = null), (banPage = null))
                  : (selected = card)
              "
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="9"
                  transform="matrix(-1 0 0 1 60 0)"
                  fill="#615DFA"
                />
                <path
                  d="M41.8563 29.1437C42.3293 29.6166 42.3293 30.3834 41.8563 30.8564L34.1492 38.5635C33.6763 39.0364 32.9095 39.0364 32.4365 38.5635C31.9636 38.0905 31.9636 37.3237 32.4365 36.8508L39.2873 30L32.4365 23.1492C31.9636 22.6763 31.9636 21.9095 32.4365 21.4365C32.9095 20.9636 33.6763 20.9636 34.1492 21.4365L41.8563 29.1437ZM19 28.7889L41 28.7889L41 31.2111L19 31.2111L19 28.7889Z"
                  fill="white"
                />
              </svg>

          </div>
        </div>
        <height class="exp" :show="selected === card">
          <div class="hidden__content">
            <div
              class="block"
              :class="{ banActive: banPage === card.ban }"
              v-if="card.ban"
              @click="banPage = card.ban"
            >
              <svg
                width="29"
                height="26"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2558 0.0626774C12.8244 0.158808 12.3242 0.356357 11.9278 0.587102C11.5532 0.805163 10.9638 1.36845 10.6894 1.77057C10.4043 2.18839 0.432059 20.1349 0.274607 20.5135C-0.212987 21.686 -0.0415121 23.141 0.71152 24.2205C1.31383 25.084 2.12627 25.6385 3.16031 25.8918C3.59463 25.9982 3.77736 26 14.119 26C24.4607 26 24.6434 25.9982 25.0777 25.8918C25.9438 25.6796 26.7107 25.2135 27.2752 24.5562C27.5859 24.1944 27.9951 23.4126 28.1149 22.9521C28.3205 22.1616 28.2632 21.2359 27.9639 20.5135C27.7238 19.9337 17.698 1.97092 17.3856 1.56071C16.8833 0.900969 16.162 0.410711 15.306 0.147041C14.8101 -0.00570938 13.7572 -0.0489976 13.2558 0.0626774ZM14.8128 6.75492C15.1486 6.90433 15.4506 7.19563 15.6218 7.53524L15.7476 7.78499V12.238C15.7476 16.6516 15.7466 16.6931 15.6314 16.9366C15.4681 17.2816 15.1976 17.5642 14.8693 17.7326C14.6287 17.8561 14.5207 17.8769 14.119 17.8769C13.7173 17.8769 13.6093 17.8561 13.3687 17.7326C13.0405 17.5642 12.7699 17.2816 12.6067 16.9366C12.4914 16.6931 12.4904 16.6516 12.4904 12.238V7.78499L12.6163 7.53524C13.0312 6.7118 13.9679 6.37909 14.8128 6.75492ZM14.8128 19.709C15.1486 19.8584 15.4506 20.1497 15.6218 20.4893C15.7924 20.8278 15.7963 21.4399 15.6303 21.7943C15.4691 22.1383 15.1983 22.4216 14.8693 22.5904C14.6287 22.7139 14.5207 22.7347 14.119 22.7347C13.7173 22.7347 13.6093 22.7139 13.3687 22.5904C13.0397 22.4216 12.769 22.1383 12.6078 21.7943C12.4417 21.4399 12.4457 20.8278 12.6163 20.4893C13.0312 19.6659 13.9679 19.3332 14.8128 19.709Z"
                  fill="#FA5D5D"
                />
              </svg>
              Игровая блокировка на 30 дней
            </div>
            <!--            <transition name="slide-fade">-->
            <div class="stats" v-if="!banPage">
              <div class="lvl sr">
                <b>Уровень</b>
                <div class="line"></div>
                <p>{{ card.lvl }}</p>
              </div>
              <div class="exp sr">
                <b>Опыт</b>
                <div class="line"></div>
                <p>{{ card.exp }}/{{ card.maxEXP }}</p>
              </div>
              <div class="fraction sr">
                <b>Фракция</b>
                <div class="line"></div>
                <p>{{ card.fraction === "" ? card.fraction : "Нет" }}</p>
              </div>
              <div class="cash sr">
                <b>Наличные</b>
                <div class="line"></div>
                <p class="money">{{ card.cash }}</p>
              </div>
              <div class="bank sr">
                <b>Банк</b>
                <div class="line"></div>
                <p class="money">{{ card.bank }}</p>
              </div>
            </div>
            <!--            </transition>-->
            <!--            <transition name="slide-fade">-->
            <div class="ban__stats stats" v-if="banPage">
              <div class="lvl sr">
                <b>Забанил</b>
                <div class="line"></div>
                <p>{{ card.ban.ByAdmin }}</p>
              </div>
              <div class="lvl sr">
                <b>Причина</b>
                <div class="line"></div>
                <p>{{ card.ban.Reason }}</p>
              </div>
              <div class="lvl sr">
                <b>Дата</b>
                <div class="line"></div>
                <p>{{ card.ban.Date }}</p>
              </div>
              <div class="lvl sr">
                <b>Разбан</b>
                <div class="line"></div>
                <p>{{ card.ban.Until }}</p>
              </div>
            </div>
            <!--            </transition>-->

            <button
              :disabled="banPage === null && card.ban ? true : false"
              :class="{ ban: banPage, hasBan: card.ban }"
              @click="
                banPage
                  ? (banPage = null)
                  : selectBanPage(getter.indexOf(card))
              "
            >
              {{ buttonsText[filteredCards.indexOf(card)] }}
            </button>
          </div>
        </height>
      </div>
      <!-- free slot №2 -->
      <div
        class="profile__card"
        :class="{
          wactive: selected != null,
          opacity: selected !== 'create' && selected != null,
          third: selected === 'create' && selected === 'create',
        }"
        v-if="PhantomCards.second && !getter[1].nick"
      >
        <div class="card__wrapper">
          <b>Свободный слот</b>
          <div class="buttons">
            <div class="next" @click="$emit('createCharacter', 2)">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="9"
                  transform="matrix(-1 0 0 1 60 0)"
                  fill="#615DFA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.4427 19.044C38.156 19.1011 37.8248 19.2411 37.5639 19.4154C37.4287 19.5058 35.3704 21.532 32.9 24.0067C28.7584 28.1554 28.4752 28.4489 28.4316 28.6379C28.406 28.7489 28.2985 29.5779 28.193 30.4801L28.0009 32.1205L28.1273 32.3788C28.2682 32.6668 28.5284 32.8699 28.8179 32.9178C28.9115 32.9333 29.7005 32.8588 30.6478 32.7451C31.947 32.5892 32.3511 32.5255 32.486 32.4555C32.5891 32.402 34.4535 30.5667 37.1011 27.9126C41.1983 23.8053 41.5542 23.4366 41.684 23.1656C42.0658 22.3683 42.046 21.5661 41.6233 20.7098C41.4575 20.3739 41.3448 20.2187 41.0507 19.9214C40.7485 19.616 40.6099 19.5145 40.2585 19.341C39.6394 19.0356 39.0052 18.9318 38.4427 19.044ZM39.3525 21.0223C39.7738 21.2262 40.0316 21.614 40.0334 22.0462L40.0343 22.2918L35.8309 26.4967L31.6274 30.7016L30.8706 30.792C30.4543 30.8418 30.1054 30.8741 30.0951 30.864C30.085 30.8537 30.1184 30.505 30.1695 30.0891L30.2625 29.3328L34.3302 25.2596C36.5674 23.0193 38.4765 21.1278 38.5727 21.0563C38.7906 20.8943 39.0636 20.8824 39.3525 21.0223ZM21.2485 21.9371C20.1994 22.164 19.2946 23.0772 19.0739 24.132C18.9754 24.6031 18.9754 39.2186 19.0739 39.6897C19.2446 40.5056 19.8309 41.2619 20.5788 41.631C21.2702 41.9723 20.774 41.9522 28.5472 41.9531C36.2638 41.954 35.8788 41.9681 36.5148 41.6616C37.2395 41.3124 37.7996 40.6386 38.0445 39.8214C38.1177 39.5771 38.1255 39.2392 38.1397 35.7061C38.1571 31.334 38.1708 31.5262 37.8196 31.2025C37.4744 30.8844 37.057 30.8499 36.6528 31.1062C36.4971 31.2049 36.4148 31.2998 36.3336 31.4742L36.2243 31.7091L36.2228 35.4977C36.2215 39.0647 36.2166 39.2967 36.1397 39.466C36.0377 39.6906 35.784 39.9171 35.5628 39.9812C35.4433 40.0157 33.3683 40.0261 28.463 40.0168L21.5322 40.0036L21.3567 39.881C21.2602 39.8136 21.1308 39.684 21.0691 39.5929L20.957 39.4273L20.9454 31.9556L20.9338 24.4838L21.0385 24.2855C21.0962 24.1764 21.2292 24.0266 21.3342 23.9526L21.5251 23.8181L25.9075 23.7957L30.2898 23.7733L30.5104 23.6386C30.9627 23.3624 31.1114 22.7472 30.829 22.3206C30.7624 22.2199 30.6238 22.0819 30.521 22.0139L30.3341 21.8902L25.937 21.8821C22.3049 21.8755 21.4892 21.885 21.2485 21.9371Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- vip slot if VIP == FALSE // VIP-СЛОТ -->
      <div
        class="profile__card"
        :class="{
          wactive: selected != null,
          opacity: selected !== 'create' && selected != null,
          third: selected === 'create' && selected === 'create',
        }"
        v-if="!PhantomCards.third && !getter[2].nick"
      >
        <div class="card__wrapper">
          <b>VIP - слот</b>
          <div class="buttons">
            <div
              class="vip"
              @click="
                showModal(
                  'VIP - Слот',
                  'Платный VIP Слот, вы можете его разблокировать.',
                  ['cefC::buyNewSlot', '1'],
                  'Разблокировать слот'
                )
              "
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="9"
                  transform="matrix(-1 0 0 1 60 0)"
                  fill="#FFAD32"
                />
                <path
                  d="M20.5556 35L18 21.25L25.0278 27.5L29.5 20L33.9722 27.5L41 21.25L38.4444 35H20.5556ZM38.4444 38.75C38.4444 39.5 37.9333 40 37.1667 40H21.8333C21.0667 40 20.5556 39.5 20.5556 38.75V37.5H38.4444V38.75Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- vip slot if VIP == TRUE -->
      <div
        class="profile__card"
        :class="{
          wactive: selected != null,
          opacity: selected !== 'create' && selected != null,
          third: selected === 'create' && selected === 'create',
        }"
        v-if="PhantomCards.third"
      >
        <div class="card__wrapper">
          <b>Свободный слот</b>
          <div class="buttons">
            <div @click="$emit('createCharacter', 3)">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="9"
                  transform="matrix(-1 0 0 1 60 0)"
                  fill="#615DFA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.4427 19.044C38.156 19.1011 37.8248 19.2411 37.5639 19.4154C37.4287 19.5058 35.3704 21.532 32.9 24.0067C28.7584 28.1554 28.4752 28.4489 28.4316 28.6379C28.406 28.7489 28.2985 29.5779 28.193 30.4801L28.0009 32.1205L28.1273 32.3788C28.2682 32.6668 28.5284 32.8699 28.8179 32.9178C28.9115 32.9333 29.7005 32.8588 30.6478 32.7451C31.947 32.5892 32.3511 32.5255 32.486 32.4555C32.5891 32.402 34.4535 30.5667 37.1011 27.9126C41.1983 23.8053 41.5542 23.4366 41.684 23.1656C42.0658 22.3683 42.046 21.5661 41.6233 20.7098C41.4575 20.3739 41.3448 20.2187 41.0507 19.9214C40.7485 19.616 40.6099 19.5145 40.2585 19.341C39.6394 19.0356 39.0052 18.9318 38.4427 19.044ZM39.3525 21.0223C39.7738 21.2262 40.0316 21.614 40.0334 22.0462L40.0343 22.2918L35.8309 26.4967L31.6274 30.7016L30.8706 30.792C30.4543 30.8418 30.1054 30.8741 30.0951 30.864C30.085 30.8537 30.1184 30.505 30.1695 30.0891L30.2625 29.3328L34.3302 25.2596C36.5674 23.0193 38.4765 21.1278 38.5727 21.0563C38.7906 20.8943 39.0636 20.8824 39.3525 21.0223ZM21.2485 21.9371C20.1994 22.164 19.2946 23.0772 19.0739 24.132C18.9754 24.6031 18.9754 39.2186 19.0739 39.6897C19.2446 40.5056 19.8309 41.2619 20.5788 41.631C21.2702 41.9723 20.774 41.9522 28.5472 41.9531C36.2638 41.954 35.8788 41.9681 36.5148 41.6616C37.2395 41.3124 37.7996 40.6386 38.0445 39.8214C38.1177 39.5771 38.1255 39.2392 38.1397 35.7061C38.1571 31.334 38.1708 31.5262 37.8196 31.2025C37.4744 30.8844 37.057 30.8499 36.6528 31.1062C36.4971 31.2049 36.4148 31.2998 36.3336 31.4742L36.2243 31.7091L36.2228 35.4977C36.2215 39.0647 36.2166 39.2967 36.1397 39.466C36.0377 39.6906 35.784 39.9171 35.5628 39.9812C35.4433 40.0157 33.3683 40.0261 28.463 40.0168L21.5322 40.0036L21.3567 39.881C21.2602 39.8136 21.1308 39.684 21.0691 39.5929L20.957 39.4273L20.9454 31.9556L20.9338 24.4838L21.0385 24.2855C21.0962 24.1764 21.2292 24.0266 21.3342 23.9526L21.5251 23.8181L25.9075 23.7957L30.2898 23.7733L30.5104 23.6386C30.9627 23.3624 31.1114 22.7472 30.829 22.3206C30.7624 22.2199 30.6238 22.0819 30.521 22.0139L30.3341 21.8902L25.937 21.8821C22.3049 21.8755 21.4892 21.885 21.2485 21.9371Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import height from "../global-height.vue";
export default {
  data() {
    return {
      selected: null,
      banPage: null,
    };
  },
  methods: {
    showModal(header, body, methodArgs, buttonText) {
      let prop = {
        show: true,
        header: header,
        body: body,
        methodArgs: methodArgs,
        buttonText: buttonText,
      };
      this.$emit("modal", prop);
    },
    selectBanPage(index_card) {
      console.log("ПЕРЕДАЮ");
      console.log(index_card + 1);
      window.mp.trigger("cefC::selectChar", index_card + 1);
    },
  },
  components: {
    height,
  },
  computed: {
    getter() {
      return this.$store.state.RAF.userInfo_global.characters
    },
    title() {
      return this.selected ? "Стартуем?" : "Выберите своего персонажа";
    },
    // фантомные карточки типа: "Свободный слот", "Вип - слот"
    PhantomCards() {
      return {
        second: this.getter[1].InfoCreate === -1 ? true : false,
        third: this.getter[2].InfoCreate === -1 ? true : false,
        // second: this.getter.characters[1].InfoCreate === -1? 'свободный' : 'занят',
        // third: this.getter.characters[2].InfoCreate === -1 ? 'свободный' : 'не куплен'
        //
      };
    },
    filteredCards() {
      return this.getter.filter((el) => {
        return el.InfoCreate !== -1 && el.InfoCreate !== -2;
      });
    },
    buttonsText() {
      let first, second, third, arr;
      arr = this.getter;
      if (arr[0].ban) {
        if (this.banPage === arr[0].ban) {
          first = "Назад";
        } else {
          first = "Недоступно";
        }
      } else if (!arr[0].ban) {
        first = "Играть";
      }
      if (arr[1].ban) {
        if (this.banPage === arr[1].ban) {
          second = "Назад";
        } else {
          second = "Недоступно";
        }
      } else if (!arr[1].ban) {
        second = "Играть";
      }
      if (arr[2].ban) {
        if (this.banPage === arr[2].ban) {
          third = "Назад";
        } else {
          third = "Недоступно";
        }
      } else if (!arr[2].ban) {
        third = "Играть";
      }
      return [first, second, third];
    },
    spliceNames(){
      let names = []
      for (let i = 0; i < this.filteredCards.length; i++) {
        const element = this.filteredCards[i]
      names.push(element.nick.replace('_', ' '))
      }
      return names
    }
  },
};
</script>
<!--блять перевести в миксины-->
<style lang="less" scoped>
@import "../../assets/SelectCharacter/characters.less";
@keyframes show {
  from {
    opacity: 0;
    margin-left: -250px;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
}

.profile__card:nth-child(1) {
  animation-duration: 1.5s;
  animation-name: show;
}

.profile__card:nth-child(2) {
  animation-duration: 2s;
  animation-name: show;
}
.profile__card:nth-child(3) {
  animation-duration: 2.5s;
  animation-name: show;
}

.ch__title {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: #ffffff;
  position: absolute;
  top: 5%;
  margin-left: 0;
  max-width: 537px;
  //animation-duration: 0.2s;
  //animation-name: show;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
