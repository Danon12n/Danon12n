import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSlideBar from 'vue-slide-bar'
import MainButton from '@/components/GLOBAL/MainButton'
import heightComp from '@/components/global-height'
import circleComp from '@/components/GLOBAL/circle'
//STYLES


Vue.component('VueSlideBar', VueSlideBar)
Vue.component('MainButton', MainButton)
Vue.component('heightComp', heightComp)
Vue.component('CircleComp', circleComp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


let d = document.querySelector('#root')
window.app = d.__vue__.$children[0]
window.dispatch = (name, args) => window.app.$store.dispatch(name, args)
window.state = window.app.$store.state
window.getters = window.app.$store.getters
window.commit = (name, args) => window.app.$store.commit(name, args)
// app.$store - обращение к стору
// app.$store - обращение к стору


// Custom components
