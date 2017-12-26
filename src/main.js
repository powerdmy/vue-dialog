import Vue from 'vue'
import App from './App.vue'
import dialog from './components/index.js'
Vue.use(dialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
