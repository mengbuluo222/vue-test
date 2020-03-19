import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import router from './router'


//将axios挂载到原型上
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,

  //h为createElement
  render: h => h(App)
}).$mount('#app')
