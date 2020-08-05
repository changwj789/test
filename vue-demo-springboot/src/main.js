// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import md5 from 'js-md5';
axios.defaults.headers['Authorization-token']=sessionStorage.getItem("token");
Vue.prototype.$md5 = md5;
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

// 添加请求拦截器
axios.interceptors.request.use(config=>{
  //请求头Authorization-token赋值(在发送请求之前做些什么)
  axios.defaults.headers['Authorization-token']=sessionStorage.getItem("token")
  alert(sessionStorage.getItem("token"))
  return config;
})
axios.interceptors.response.use(response=>{
  var success=response.data.success;
  var msg=response.data.msg;
  /*alert("qw")
  alert(msg)
  alert(success)*/
  if (typeof (success)!="undefined" && success==500){
      router.replace({
        path:"/"

      })
  }
  return response
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
