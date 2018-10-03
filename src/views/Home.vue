<template lang="pug">
  Calendar
</template>

<script lang="ts">
import Vue from 'vue'
import Calendar from '@/components/Calendar.vue'
export default Vue.extend({
  components: {
    Calendar
  }
})
</script>

<style lang="scss" scoped>

    #spinner {
        text-align: center;
        h1 {
            margin-bottom: 75px;
        }
    }


</style>

