<template lang="pug">
  #app
    component(:is="layout")

</template>

<script>
import Vue from 'vue'

const default_layout = "default";

export default Vue.extend({
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  }
})
</script>

<style lang="scss" scoped>
    #app {
        height: 100vh;
    }
</style>


