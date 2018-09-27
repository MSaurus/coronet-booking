<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-70">
      <Tabs></Tabs>
      <vue-calendar
        :show-limit="3"
        @show-all="showAll"
        @event-clicked="eventClicked"
        @month-changed="monthChanged"
      ></vue-calendar>
    </div>
  </div>
</template>

<script>
// Ask David why we can't use lang='ts' here
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
export default Vue.extend({
  name: "Calendar",
  components: {
    Tabs
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    showAll(events) {
      // Do something...
    },
    dayClicked(day) {
      console.log(day);
      // Do something...
    },
    eventClicked(event) {
      // Do something...
    },
    monthChanged(start, end) {
      // Do something...
    }
  },
  created() {
    this.$calendar.eventBus.$on("show-all", events => this.showAll(events));
    this.$calendar.eventBus.$on("day-clicked", day => this.dayClicked(day));
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
