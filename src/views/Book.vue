<template lang='pug'>
    book-form
</template>

<script>
    import Vue from 'vue'
    import BookForm from '@/components/Form.vue'
    import Nav from '@/components/Nav.vue'
    export default Vue.extend({
        name: "Book",
        components: {
            BookForm,
            Nav
        }
    })
</script>

<style scoped>

</style>