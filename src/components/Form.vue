<template lang="pug">
    div.md-layout.md-alignment-top-center
        div.md-layout-item.md-size-70(md-align="center")
            md-field
                label Title:
                md-input(v-model='title' md-counter="30")
                span.md-helper-text Helper Text
            md-field
                label Description
                md-textarea(v-model='description')
            md-datepicker(v-model="startDate" md-immediately)
                label Select start date
            md-datepicker(v-model="endDate" md-immediately)
                label Select end date
            md-field
                label(for="room") Which konference room?
                md-select(v-model="room" name="room" id="room")
                    md-option(value="stora") Stora Konferense
                    md-option(value="lilla") Lilla Konferense
            md-field
                label Attendees:
                md-input(v-model='attendees')
                span.md-helper-text Seperate attendees with a coma.
            <md-button class="md-dense md-raised md-primary">Book</md-button>
</template>



<script lang="ts">
    //https://github.com/mariomka/vue-datetime
    import Vue from 'vue'

    export default Vue.extend({
        name: 'BookForm',
        data: () => ({
            title: null,
            description: null,
            startDate: null,
            endDate: null,
            room: null,
            attendees: null
        })
    })
</script>

<style lang="scss" scoped>
</style>


