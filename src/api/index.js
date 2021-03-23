import http from './http'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = '/vantdemo/readphp/data.php'

// get请求
let api = {
  login: function (params) {
    console.log('loginnnnnnn')
    // return http.get(`${resquest}?Action=login`, params)
    return {
      code: 200,
      usename: params.username,
      password: params.password
    }
  },
  getHomeListAPI: function (params) {
    // console.log(`${resquest}data.php?Action=home`,params)
    return http.get(`${resquest}?Action=home`, params)
  },

  getRankListByNum: function (params) {
    return http.get(`${resquest}?Action=rank`, params)
  },

  getNovelContent: function (params) {
    return http.get(`${resquest}?Action=read`, params)
  },

  getIntroContent: function (params) {
    return http.get(`${resquest}?Action=currintro`, params)
  },

  getAllNovels: function (params) {
    return http.get(`${resquest}?Action=all`, params)
  },

  loginAction: function (params) {
    return http.get(`${resquest}?Action=login`, params)
  }

// // post请求
//   postFormAPI:function (params){
//     return http.post(`${resquest}/postForm.json`,params)
//   },

}

export default api
