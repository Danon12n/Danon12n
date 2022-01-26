import Vue from 'vue'
import VueRouter from 'vue-router'
// RAF
import Auth from '../views/RAF/RAF-view.vue'
import Login from '../views/RAF/Login.vue'
import Register from '../views/RAF/Reg.vue'
import ForgotPassword from '../views/RAF/forgotPassword.vue'
import afterRAF from '@/views/RAF/afterRAF.vue'
// CreateCharacter
import CreateCharacter from '../views/CC/CreateCharacter-panel.vue'
// Change Spawn
import ChangeSpawnView from '../views/ChangeSpawn/CharacterSpawn-view.vue'
import SelectCharacter from '../components/CharacterSpawn/SelectCharacter.vue'
import SelectSpawn from '../components/CharacterSpawn/SelectSpawn.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'RAF-Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        alias: '/',
        name: 'RAF-Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'RAF-Register',
        component: Register,
      },
      
      {
        path: 'forgot-password',
        name: 'RAF-Forgot',
        component: ForgotPassword,
      },
    ]
  },
  {
    path: '/complete',
    name: 'complete',
    component: afterRAF,
  },
  {
    path: '/create-character',
    name: 'CreateCharacter',
    component: CreateCharacter,
  },
  {
    path: '/spawn-view',
    name: 'SpawnView',
    component: ChangeSpawnView,
    children: [
      {
        path: '/select-character',
        name: 'SelectCharacter',
        alias: '/',
        component: SelectCharacter,
      },
      {
        path: '/select-spawn',
        name: 'SelectSpawn',
        component: SelectSpawn,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
