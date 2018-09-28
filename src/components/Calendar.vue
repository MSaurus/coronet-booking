<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-70">
      <Tabs></Tabs>
      <full-calendar :events="events"></full-calendar>
    </div>
  </div>
</template>

<script>
// Ask David why we can't use lang='ts' here
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
import { FullCalendar } from 'vue-full-calendar'
import * as Ajax from '@/ajax/index'
export default Vue.extend({
  name: "Calendar",
  components: {
    Tabs,
    FullCalendar
  },
  data() {
    return {
      events: [
        {
          title: 'Event 1',
          start: '2018-09-29T13:00:00',
          end: '2018-09-29T14:00:00',
          allDay: false
        },
        {
          title: 'Event 2',
          start: '2018-09-26T12:00:00',
          end: '2018-09-26T14:00:00',
          allDay: false
        },
        {
          title: 'Event 3',
          start: '2018-09-15T09:30:00',
          end: '2018-09-15T11:30:00',
          allDay: false
        }
      ]
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
