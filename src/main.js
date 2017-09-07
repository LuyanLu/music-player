// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import './common/sass/reset.scss'
import './common/sass/base.scss'

// Vue.use(VueResource)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
