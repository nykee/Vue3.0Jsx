import axios from 'axios'
// import store from '@/store'
// import { Dialog } from 'ant-design-vue'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 拦截request请求设置
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    /*const st = localStorage.getItem('st')
    if (token && st) {
      config.headers.Authorization = 'Bearer ' + token
      config.headers['X-ST'] = st
    }*/
    if(token){
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error.response)
  }
);

// 拦截response返回结果
request.interceptors.response.use(
  response => {
    if (response.data.code === 200||203) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
      console.log(error);
    if (error.response.code === 401 || error.response.code === 400) {
      var alert = '登录已失效,确认跳转到登录页'
      const msg = error.response.data.error
      console.log(msg)
      switch (msg) {
        case '用户名或密码不正确':
          alert = '用户名或密码不正确'
          break
        default:
          alert = '登录已失效,确认跳转到登录页'
          break
      }
      /*Dialog.alert({
        message: alert
      }).then(() => {
        store.commit('logout')
        location.reload()
      })*/
    }
    return Promise.reject(error.response.data)
  }
)

export default request
