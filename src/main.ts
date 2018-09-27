import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MdButton, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import vueCalendar from 'vue2-simple-calendar'
import "./assets/vue2-simple-calendar.css";

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(vueCalendar, {
  // configuration goes here.
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
