<template lang="pug">
    #calendar-view
        lilla-calendar
</template>

<script lang="ts">
import Vue from 'vue'
import LillaCalendar from '@/views/LillaCalendar.vue'
export default Vue.extend({
    components: {
        LillaCalendar
    }
})
</script>

<style lang="scss" scoped>
#calendar-view {
    padding: 10vh;
}
</style>

