import Vue from 'vue'

;(async () => {
  const { default: App } = await import('./App.vue')
  const app = new Vue({
    render: (h) => h(App)
  })

  app.$mount('#app')
})()
