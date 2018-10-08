<template lang="pug">
  #app
    Nav
    router-view

</template>

<script>
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
  mounted: () => {
    gapi.load('auth2', function() { 
      gapi.auth2.init()
    })
  },
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


