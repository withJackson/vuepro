import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // get token from cookie
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // const hasToken = getToken()
  // console.log('hasToken', hasToken)
  console.log('to.path', to.path)
  const hasToken = 'sdnfsnjf'
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
    next()
  } else {
    if (to.path === '/') {
      next({ path: '/login' })
    }
    next()
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
