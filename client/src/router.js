import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      props: true
    },
    {
      path: '/game/:tableNumber',
      name: 'game-table',
      component: Game,
      props: true
    },
    
  ]
})
