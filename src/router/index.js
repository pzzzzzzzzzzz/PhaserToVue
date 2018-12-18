import Vue from 'vue'
import Router from 'vue-router'
import PhaserBox from '@/components/PhaserBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhaserBox',
      component: PhaserBox
    }
  ]
})
