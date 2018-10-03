<template>
  <div class="md-layout md-gutter md-alignment-top-center">
    <div class="md-layout-item md-layout md-size-100 md-alignment-top-center">
      <div class="md-layout-item md-size-70">
        <Tabs></Tabs>
        <full-calendar :events="events"></full-calendar>
      </div>
    </div>
  </div>
</template>

<script>
// Ask David why we can't use lang='ts' here
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
import { FullCalendar } from 'vue-full-calendar'
import axios from 'axios'
export default Vue.extend({
  name: "Calendar",
  components: {
    Tabs,
    FullCalendar
  },
  data() {
    return {
      loading: true,
      events: []
    }
  },

  mounted(){
    setTimeout(() => {
      axios.get('https://coronet-booking.herokuapp.com/api/calendars/stora')
      .then(response =>  {return response['data']})
      .then(data => {
        let items = data.response.items
        items.forEach(item => {
          this.events.push({
            title: item.summary,
            start: item.start.date_time,
            end: item.end.date_time
          })
        })
        this.loading = false
      })
    }, 2000)
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '~vue-material/dist/theme/engine';

.md-layout-item {
  
  height: 700px;
}
  
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
