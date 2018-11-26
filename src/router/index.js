import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StrategyPage from '@/components/pages/StrategyPage'
import NotePage from '@/components/pages/NotePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Home,
      component: Home,
      children: [
        {
          path: 'note',
          component: NotePage
        }
      ]
    },
    {
      path: '/',
      name: Home,
      component: Home,
      children: [
      	{
      		path: 'strategy',
      		component: StrategyPage
      	},
        {
          path: 'note',
          component: NotePage
        }
      ]
    }
  ]
})
