<template lang="pug">

    div
        md-tabs(md-sync-route)
            md-tab(id="tab-stora" md-label="Stora Konferens" to="/stora")
            md-tab(id="tab-lilla" md-label="Lilla Konferens" to="/lilla")
            md-tab(id="tab-boka" md-label="Boka" to="/boka")


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


