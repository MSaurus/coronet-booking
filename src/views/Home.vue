<template lang="pug">
  Calendar
</template>

<script lang="ts">
import Vue from 'vue'
import Calendar from '@/components/Calendar.vue'
import vueCalendar from 'vue2-simple-calendar'
export default Vue.extend({
  components: {
    Calendar
  }
})
</script>
