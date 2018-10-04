<template lang="pug">
  #app
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

<style lang="scss" scoped>
    #app {
        height: 100vh;
    }
</style>


