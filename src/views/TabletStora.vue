<template lang="pug">
    #calendar-view
        stora-calendar
</template>

<script lang="ts">
import Vue from 'vue'
import StoraCalendar from '@/views/StoraCalendar.vue'
export default Vue.extend({
    components: {
        StoraCalendar
    }
})
</script>

<style lang="scss" scoped>
#calendar-view {
    padding: 10vh;
}
</style>

