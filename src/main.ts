import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MdButton, MdTabs, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'fullcalendar/dist/fullcalendar.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(MdField)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
