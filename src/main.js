// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'         
// 解决移动端300ms延迟问题，需要先安装fastClick
// import './assets/styles/reset.css'
import 'styles/reset.css'
// import './assets/styles/border.css'
import 'styles/border.css'
// import './assets/styles/iconfont.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址不同,返回不同的内容给用户
