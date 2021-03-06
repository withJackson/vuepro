import axios from 'axios'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui'
import {getToken, removeToken} from '@/utils/auth'
import router from '../router'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://www.baidu.com'
} else if (process.env.NODE_ENV === 'debug') {
  // axios.defaults.baseURL = 'https://www.ceshi.com'
} else if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'https://www.production.com'
}
axios.defaults.timeout = 10000

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 3 * 1000
})

service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const token = getToken()
  if (token) {
    config.params = {'token': token}
    config.headers.token = token
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        removeToken()
        // store.commit('loginSuccess', null);
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: this.$router.currentRoute.fullPath
            }
          })
        }, 1000)
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = '/NotFound'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }

  Message({
    message: error.message,
    duration: 1000,
    forbidClick: true
  })
  // 如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
// 4.导入文件
export default service
