import Vue from 'vue'
import App from './App.vue'
import Footer from './Components/Footer.vue'
import Body from './Components/Server.vue'
import Header from './Components/Header.vue'

Vue.component('app-footer', Footer)
Vue.component('app-body', Body)
Vue.component('app-header', Header)

export const eventBus = new Vue()

new Vue({
  el: '#app',
//	components: {
//		'app-footer': Footer,
//		'app-body': Body
//	},
  render: h => h(App)
})
