<template lang="pug">
  #app
    Nav
    Home

</template>

<script lang="ts">
import Vue from 'vue'
import Home from './views/Home.vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
  components: {
    Home,
    Nav
  }
})
</script>

<style lang="scss" scoped>

#app{

}
</style>


