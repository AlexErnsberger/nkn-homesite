// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import url from '@/assets/json/url'
import namespace from '@/assets/js/nknNamespace'
import '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.$url = url
Vue.prototype.$namespace = namespace

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
