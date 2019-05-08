import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import Bmob from "hydrogen-js-sdk"
import store from './store'
import Api from './api/index'

Vue.config.productionTip = false

// 引入公共组件
import common from './common'
Vue.use(common);

// axios
Vue.prototype.$api=Api;

//使用Bmob云数据库接口
Bmob.initialize("c6ed8bf900736a7ec6c300f60dc1e600", "ea5772d46057a0b5f3076fc660aab623");
Vue.prototype.Bmob = Bmob;


// 路由
Vue.use(VueRouter)
const router=new VueRouter({
  routes:Routes
})

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')