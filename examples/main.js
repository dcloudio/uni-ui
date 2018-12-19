import Vue from 'vue'
import UniUI from 'uni-ui'
import App from './App'
import pageHead from './components/page-head.vue'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component(pageHead.name,pageHead)
Vue.use(UniUI)

const app = new Vue({
	...App
})
app.$mount()
