<template>
  <div class="tasks">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
     <h1 class="page-title">Tasks</h1>
      </div>
      <router-link tag="a" :to="'/usermanagement/createuser'">
        <div class="full-btn d-flex justify-content-center align-items-center">
          <b-button variant="info">New Task</b-button>
        </div>
      </router-link>
    </div>
  

  <div>
    
    <b-tabs pills card>
      <b-tab title="Calender View" class="px-0" active>
         <div class="calendar">
            <full-calendar
                class="full-calendar"
                :options="config"
            >
                <template #eventContent="{ timeText, event }">
                    <b>{{ timeText }}</b>
                    <i>{{ event.title }}</i>
                </template>
            </full-calendar>
            </div>
        </b-tab>
      <b-tab title="Table View" class="px-0">
        <CalenderNav
            :events="events"
            :weekends-visible="weekendsVisible"
            @set-weekends-visible="setweekendsVisible"
        />
        </b-tab>
    </b-tabs>
    

        
  </div>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CalenderNav from './components/CalenderNav/CalenderNav'

export default {
  name: "Tasks",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalenderNav
  },
  data() {
    return {
     
    };
  },
  computed: {
     ...mapGetters(['events', 'weekendsVisible']),

    config () {
      return {
        ... this.configOptions,
        ...this.eventHandlers
      }
    },

    configOptions () {
      return {
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: this.events,
        weekends: this.weekendsVisible,
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          // left: 'prev,next today',
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth'
      }
    },

    eventHandlers () {
      return {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventDrop,
        select: this.onDateSelect
      }
    }
  },
  mounted() {
   
  },

  methods: {
    ...mapActions([
      'createEvent',
      'updateEvent',
      'deleteEvent',
      'setweekendsVisible'
    ]),

    onDateClick (payload) {
      const title = prompt('Please enter a new title for your event')

      if (!title) {
        return
      }

      const id = (this.events.length + 1) * 10
      const { start, end, date, allDay } = payload

      return this.createEvent({
        id,
        title,
        date,
        start,
        end,
        allDay
      })
    },

    onDateSelect (payload) {
      return this.onDateClick(payload)
    },

    onEventClick ({ event }) {
      const confirmed = confirm(`Are you sure you want to delete the event '${event.title}'?`)

      if (!confirmed) {
        return
      }

      return this.deleteEvent(event.id)
    },

    onEventDrop ({ event }) {
      return this.updateEvent(event)
    },
  },
};
</script>
<style src="./Tasks.scss" lang="scss" />
