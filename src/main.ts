// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './hooks' // -> Required only for the "01-route-hooks" example
import 'reflect-metadata' // -> Required only for the "10-decoupled-dependencies-ioc" example

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
