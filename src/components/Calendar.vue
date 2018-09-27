<template lang="pug">
  div(class="md-layout md-alignment-top-center")
    div(class="md-layout-item md-size-70")
      Tabs
      #cal
        vue-calendar(
          :show-limit="3"
          :events="events"
          :disable="disabledDays"
          :highlight="highlightDays"

          @show-all="showAll"
          @day-clicked="dayClicked"
          @event-clicked="eventClicked"
          @month-changed="monthChanged")
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
export default Vue.extend({

  name: 'Calendar',
  components: {
    Tabs
  },
  methods: {
    showAll(events) {
      // Do something...
    },
    dayClicked(day) {
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
    this.$calendar.eventBus.$on('show-all', events => this.showAll(events));
    this.$calendar.eventBus.$on('day-clicked', day =>  this.dayClicked(day));
    this.$calendar.eventBus.$on('event-clicked', event => this.eventClicked(event));
    this.$calendar.eventBus.$on('month-changed', (start, end) => this.monthChanged(start, end));
  }
})


</script>

<style lang="scss" scoped>
  @import '~vue-material/dist/theme/engine';

  .md-layout-item {
    border: 3px solid black;
    height: 700px;
    
  }
  #iframe{
    width: 100%;
    height: 100%;
    
    iframe{
      height: calc(100% - 48px);
      width: 100%;
    }
  }
</style>
