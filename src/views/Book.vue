<template lang="pug">
    book-form
</template>

<script>
    import Vue from 'vue'
    import BookForm from '@/components/Form.vue'
    export default Vue.extend({
        name: "Book",
        components: {
            BookForm
        },
        mounted: () => {
            let auth2 = gapi.auth2.getAuthInstance()
            if(auth2.isSignedIn.get())
            {
                console.log('logged in')
            }
            else 
            {
                window.location.replace('/login')
            }
        }
    })
</script>

<style scoped>

</style>