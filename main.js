console.log('%cuni-app官方团队诚邀优秀前端工程师加盟，一起打造更卓越的uni-app & uniCloud\n\n欢迎投递简历到: %chr2013@dcloud.io', 'color:red;font-size:14px','color:red;font-size:14px;font-weight: bold;')
import App from './App'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
