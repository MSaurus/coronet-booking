<template lang="pug">
  div
    md-tabs(md-sync-route)
      md-tab(id="tab-calendar" md-label="Calendar" to="/components/TabsTest.vue")
      md-tab(id="tab-reserve" md-label="Reserve") 
      md-tab(id="tab-modify" md-label="Change") 


</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Tabs'
})
</script>
<style lang="scss" scoped>

  .md-tabs{
    
    height: 100%;
    width: 100%;
    }
  
  
  
</style>


