import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import router from './router'

Vue.use(VueCompositionAPI)

;(async () => {
	const { default: App } = await import('./App.vue')
	const app = new Vue({
	  router,
	  render: (h) => h(App)
	})

	app.$mount('#app')
})()


