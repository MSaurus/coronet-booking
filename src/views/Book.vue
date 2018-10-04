<template>
    <book-form></book-form>
</template>

<script>
    import Vue from 'vue'
    import BookForm from '@/components/Form.vue'
    export default Vue.extend({
        name: "Book",
        components: {
            BookForm
        }
    })
</script>

<style scoped>

</style>