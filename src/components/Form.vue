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
            table
              tr
                td
                  md-field
                    datetime(v-model="startDate" type="datetime")
                td
                  h2 -
                td
                  md-field
                    datetime(v-model="endDate" type="datetime")
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
    import { Datetime } from 'vue-datetime';


    export default Vue.extend({
        name: 'BookForm',
        components: {
          datetime: Datetime
        },

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

<style lang="scss">
.vdatetime {
  display: flex
} 
.vdatetime-input {
  background-color: transparent;
  border: none;
  font-size: 1.2em;
  text-align: center;
}
</style>


