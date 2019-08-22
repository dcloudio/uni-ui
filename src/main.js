import Vue from 'vue'
import App from './App'
import uniUi from '../lib'
Vue.config.productionTip = false
Vue.use(uniUi)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
