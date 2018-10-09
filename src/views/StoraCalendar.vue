<template lang='pug'>
    calendar(url="https://coronet-booking.herokuapp.com/api/calendars/stora")
</template>

<script>
    import Vue from 'vue'
    import Calendar from '@/components/Calendar.vue'

    export default Vue.extend({
        components: {
            Calendar
        }
    })
</script>

<style lang='scss' scoped>

</style>