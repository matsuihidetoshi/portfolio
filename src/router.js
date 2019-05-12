import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Works from './components/Works.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
})