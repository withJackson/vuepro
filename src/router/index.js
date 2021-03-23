import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/layout'),
      hidden: false
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/index'),
      hidden: true
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/layout'),
      hidden: false,
      children: [
        {
          path: 'index',
          component: () => import('@/components/HelloWorLd'),
          name: 'Documentation',
          meta: { title: 'Documentation', icon: 'documentation', affix: true }
        }
      ]
    }, {
      path: '/testtest',
      name: 'testtest',
      component: () => import('@/components/HelloWorLd'),
      hidden: false
    }

  ]
})
