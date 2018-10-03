<template>
  <div class="md-layout md-alignment-top-center">
    <div v-if="loading === true" id="spinner" md-align="center" class="md-layout-item md-size-70">
      <h1>Hämtar data från kalendern</h1>
      <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate" class="spinner"></md-progress-spinner>
    </div>
    <div v-else class="md-layout-item md-size-70">
      <Tabs></Tabs>
      <full-calendar :events="events"></full-calendar>
    </div>
  </div>
</template>

<script>
// Ask David why we can't use lang='ts' here
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
import TextFields from '@/components/Forms.vue'
import { FullCalendar } from 'vue-full-calendar'
import axios from 'axios'
export default Vue.extend({
  name: "Calendar",
  components: {
    Tabs,
    TextFields,
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

#spinner {
  text-align: center;
  h1 {
    margin-bottom: 75px;
  }
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
