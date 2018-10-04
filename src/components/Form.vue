<template lang="pug">
    div.md-layout.md-alignment-top-center
        div.md-layout-item.md-size-70(md-align="center")
            .center
                h1 Book a meeting:
            md-field
                label Meeting title:
                md-input(v-model="title")
            md-field
                label Meeting description:
                md-textarea(v-model='description')
            table
              tr
                td
                  p.field-title Start date and time:
                  md-field
                    datetime(v-model="startDate" type="datetime" style="width: 100%" auto value-zone="Europe/Stockholm" zone="Europe/Stockholm")
                td
                  .middle-dash
                    h2 -
                td
                  p.field-title End date and time:
                  md-field
                    datetime(v-model="endDate" type="datetime" style="width: 100%" auto value-zone="Europe/Stockholm" zone="Europe/Stockholm")
            md-field
                label(for="room") Which konference room?
                md-select(v-model="room" name="room" id="room")
                    md-option(value="stora") Stora Konferense
                    md-option(value="lilla") Lilla Konferense
            md-chips(v-model="attendees" md-placeholder="Add Attendees..")
                .md-helper-text Press enter to add attendee.
            .center
                md-button.md-dense.md-raised.md-primary(v-on:click="submit" con) Book
</template>



<script lang="ts">
    //https://github.com/mariomka/vue-datetime

    import Vue from 'vue'
    import axios from 'axios'
    import { Datetime } from 'vue-datetime';


    export default Vue.extend({
        name: 'BookForm',
        components: {
          datetime: Datetime
        },

        data: () => {
            return {
                title: "",
                description: "",
                startDate: "",
                endDate: "",
                room: "",
                attendees: []
            }
        },

        methods: {
            submit () {
                setTimeout(() => {
                    let data = {title: this.title,
                        attendees: JSON.stringify(this.attendees),
                        description: this.description,
                        "start-datetime": this.startDate,
                        "end-datetime": this.endDate,
                        room: this.room
                    }
                    axios.post("https://coronet-booking.herokuapp.com/api/calendars/events/new", data)
                        .then(response =>  {return response['data']})
                        .then(data => {
                            if (data.status === true) {
                                this.$router.push({name: "stora"})
                            }
                        })
                }, 1000)
            }
        }
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
    width: 100%;
    max-width: 100%;
}
    .field-title {
        margin:0
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table {
        width: 100%;
    }

    .middle-dash {
        padding: 0 10px;
        text-align: center;
    }
</style>


