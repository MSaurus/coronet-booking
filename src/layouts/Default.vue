<template lang="pug">
  div
    Nav
    router-view
    
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
  components: {
    Nav
  }
})
</script>

