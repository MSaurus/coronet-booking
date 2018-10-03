<template>
  <div class="md-layout md-alignment-top-center">
    <div id="spinner" md-align="center" class="md-layout-item md-size-85">
      <div id="spinner-container">
        <h1>Loading calendar..</h1>
        <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate" class="spinner"></md-progress-spinner>
      </div>
    </div>
    <div id="full-calendar" class="md-layout-item md-size-85">
      <full-calendar :events="this.events" :config="config"></full-calendar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { FullCalendar } from 'vue-full-calendar'
import axios from 'axios'
export default Vue.extend({
    name: "Calendar",
    components: {
        FullCalendar
    },
    props: ['url'],
    data() {
        return {
            events: [],
            config: {
                header: {
                    left:   'prev,next today',
                    center: 'title',
                    right:  'month,agendaWeek,agendaDay'
                },
                height: "parent",
                allDaySlot: false,
                slotEventOverlap: false,
                timeFormat: 'H:mm',
                slotLabelFormat: 'H:mm',
                editable: false,
                droppable: false,
                minTime: "00:00:00",
                maxTime: "24:00:00",
                buttonText: {
                    today:    'Today',
                    month:    'Month',
                    week:     'Week',
                    day:      'Day',
                    list:     'List'
                },
                eventColor: '#ffffff',
                eventBorderColor: '#000000',
                eventTextColor: '#000000',
                businessHours: {
                    dow: [ 1, 2, 3, 4, 5],
                    start: '07:00',
                    end: '21:00',
                },
                nowIndicator: false,
                selectable: false
            }
        }
    },

    mounted(){
        setTimeout(() => {
            axios.get(this.url)
                .then(response =>  {return response['data']})
                .then(data => {
                    let items = data.response.items;
                    items.forEach(item => {
                        this.events.push({
                            title: item.summary,
                            start: item.start.date_time,
                            end: item.end.date_time
                        })
                    })
                    document.getElementById("spinner").style.display = "none";
                    document.getElementById("full-calendar").style.filter = "none"
                })
        }, 1000)
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '~vue-material/dist/theme/engine';

  .md-layout-item {
    height: 80vh;
  }

  .fc-title {
    font-size: 1.1em;
  }

  #full-calendar {
    position: absolute;
    filter: blur(5px);
  }

  #spinner {
    z-index: 10;
    position: absolute;
    text-align: center;
    h1 {
      margin-bottom: 75px;
    }

    #spinner-container {
      margin-top: 20vh;
    }
  }
</style>
