import Vue from 'vue'
import router from './router'
import './style/main.scss'

;(async () => {
	const { default: App } = await import('./App.vue')
	const app = new Vue({
	  router,
	  render: (h) => h(App)
	})

	app.$mount('#app')
})()
