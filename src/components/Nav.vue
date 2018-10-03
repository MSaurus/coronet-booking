<template lang="pug">
  #nav
    Tabs

</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
export default Vue.extend({
    name: 'Nav',
    components: {
        Tabs
    }
})
</script>

<style lang="scss" scoped>
  #nav {
      margin-bottom: 40px;
  }
</style>


