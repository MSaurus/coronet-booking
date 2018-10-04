<template lang="pug">
  #app
    Nav
    Home
    div(id="g-signin2" data-onsuccess="onSignIn")

</template>

<script>
import Vue from 'vue'
import Home from './views/Home.vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
  mounted() {
    gapi.signin2.render('g-signin2', {
      onsuccess: this.onSignIn
    })
  },
  methods: {
    onSignIn: (googleUser) => 
    {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  },
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


