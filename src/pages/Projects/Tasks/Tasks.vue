<template>
  <div class="tasks">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <h1 class="page-title">Tasks</h1>
      </div>
      <!-- <router-link tag="a" :to="'/usermanagement/createuser'"> -->
      <div class="full-btn d-flex justify-content-center align-items-center">
        <!-- <b-button variant="info" @click="createTask()">New Task</b-button> -->
      </div>
      <!-- </router-link> -->
    </div>

    <div>
      <!-- tabs for calender and mobile view -->
      <b-tabs pills card>
        <b-tab title="Calender View" class="px-0" active>
          <div class="calendar">
            <full-calendar class="full-calendar" :options="config">
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

<!-- create task modal -->
      <b-modal
        id="newTask"
        title="New Task"
        body-bg-variant="white"
      >
        <b-form-group id="taskname-group" label="Task Name" label-for="taskname">
          <b-form-input
            id="taskname"
            placeholder=""
            v-model="newTask"
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>
        <template v-slot:modal-footer>
          <b-button variant="outline-info"  @click="$bvModal.hide('newTask')">Close</b-button>
          <b-button variant="info" @click="createTask()">Save</b-button>
        </template>
      </b-modal>
<!-- update task modal -->
<b-modal
        id="newTask"
        title="New Task"
        body-bg-variant="white"
      >
        <b-form-group id="taskname-group" label="Task Name" label-for="taskname">
          <b-form-input
            id="taskname"
            placeholder=""
            v-model="newTask"
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>
        <template v-slot:modal-footer>
          <b-button variant="outline-info"  @click="$bvModal.hide('newTask')">Close</b-button>
          <b-button variant="info" @click="createTask()">Save</b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalenderNav from "./components/CalenderNav/CalenderNav";

export default {
  name: "Tasks",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalenderNav,
  },
  data() {
    return {
      // Newtask: {
      //   id: "create-modal",
      //   title: "New Task",
      //   taskname:"",
      // },
      newTask:"",
      selectedPayload:{},
    };
  },
  computed: {
    ...mapGetters(["events", "weekendsVisible"]),

    config() {
      return {
        ...this.configOptions,
        ...this.eventHandlers,
      };
    },

    configOptions() {
      return {
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: this.events,
        weekends: !this.weekendsVisible,
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          // left: 'prev,next today',
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
      };
    },

    eventHandlers() {
      return {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventDrop,
        select: this.onDateSelect,
      };
    },
  },
  mounted() {},

  methods: {
    ...mapActions([
      "createEvent",
      "updateEvent",
      "deleteEvent",
      "setweekendsVisible",
    ]),

    createTask() {
      const title = this.newTask;
      const id = (this.events.length + 1) * 10;
      const { start, end, date, allDay } = this.selectedPayload;

       this.createEvent({
        id,
        title,
        date,
        start,
        end,
        allDay,
      });

      if(this.createEvent){
        this.addSuccessNotification()
        this.closeModal()
      }
    },

    closeModal() {
      this.newTask = "";
      this.$bvModal.hide('newTask');
    },




//     onDateClick(payload) {
//       const title = prompt("Please enter a new title for your event");
//       if (!title) {
//         return;
//       } 
//       const id = (this.events.length + 1) * 10;
//       const { start, end, date, allDay } = payload;

//       return this.createEvent({
//         id,
//         title,
//         date,
//         start,
//         end,
//         allDay,
//       });
//     },

    onDateSelect(payload) {
      this.$bvModal.show('newTask');
  this.selectedPayload = payload;
    },

    onEventClick({ event }) {
      const confirmed = confirm(
        `Are you sure you want to delete the event '${event.title}'?`
      );

      if (!confirmed) {
        return;
      }

      return this.deleteEvent(event.id);
    },

    onEventDrop({ event }) {
      return this.updateEvent(event);
    },

     addSuccessNotification() {
      this.$toasted.success('Task was created successfully!', {
        action: {
          text: 'X',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      })
    },
    addInfoNotification() {
      this.$toasted.info('Launching thermonuclear war...', {
        action: {
          text: 'Cancel launch',
          onClick: (e, toastObject) => {
            toastObject.text('Thermonuclear war averted').goAway(1000);
          }
        }
      });
    },
    addErrorNotification() {
      this.$toasted.error('Launching thermonuclear war...', {
        action: [
          {
            text: 'Cancel',
            onClick: (e, toastObject) => {
              toastObject.el.classList.remove('info');
              toastObject.el.classList.add('success');
              toastObject.text('Alien planet destroyed!').goAway(2000);
            }
          }
        ]
      });
    },
  },
};
</script>
<style src="./Tasks.scss" lang="scss" />
