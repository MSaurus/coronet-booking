import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MdButton, MdTabs, MdProgress, MdField, MdMenu, MdList, MdDatepicker, MdChips } from 'vue-material/dist/components'
import Default from './layouts/Default.vue'
import NoTabs from './layouts/NoTabs.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'fullcalendar/dist/fullcalendar.css'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.component('default-layout', Default)
Vue.component('no-tabs-layout', NoTabs)

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdTabs)
Vue.use(MdProgress)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdDatepicker)
Vue.use(Datetime)
Vue.use(MdChips)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')