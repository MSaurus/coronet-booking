import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MdButton, MdTabs, MdProgress, MdField, MdMenu, MdList, MdDatepicker, MdChips } from 'vue-material/dist/components'
import Default from './layouts/Default.vue'
import NoTabs from './layouts/NoTabs.vue'
import VueNativeSock from 'vue-native-websocket'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'fullcalendar/dist/fullcalendar.css'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.component('default-layout', Default)
Vue.component('no-tabs-layout', NoTabs)

Vue.config.productionTip = false

Vue.use(VueNativeSock, 'ws://192.168.226.42:8000', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000))
})

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