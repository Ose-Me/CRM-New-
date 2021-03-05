<template>
  <div class=" users">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
     <h1 class="page-title">Tasks</h1>
      </div>
      <router-link tag="a" :to="'/usermanagement/createuser'">
        <div class="full-btn d-flex justify-content-center align-items-center">
          <b-button variant="default">New Task</b-button>
        </div>
      </router-link>
    </div>

    <FullCalendar :options="calendarOptions" />


  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: "Tasks",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2021-03-01' },
          { title: 'event 2', date: '2021-03-02' }
        ]
      },

      items: [
        {
          isActive: true,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Dickerson", last: "Macdonald" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Larsen", last: "Shaw" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Mini", last: "Navarro" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Geneva", last: "Wilson" },
        },
        {
          isActive: true,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Jami", last: "Carney" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Essie", last: "Dunlap" },
        },
        {
          isActive: true,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Thor", last: "Macdonald" },
        },
        {
          isActive: true,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Larsen", last: "Shaw" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Mitzi", last: "Navarro" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Genevieve", last: "Wilson" },
        },
        {
          isActive: true,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "John", last: "Carney" },
        },
        {
          isActive: false,
          email: "test@yahoo.com",
          number: "09067283988",
          name: { first: "Dick", last: "Dunlap" },
        },
      ],
      fields: [
        {
          key: "name",
          label: "Full name",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "email", label: "Email" },
        { key: "number", label: "Phone Number" },
        {
          key: "isActive",
          label: "Is Active",
          formatter: (value) => {
            return value ? "Yes" : "No";
          },
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 20, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: {
          isActive: false,
          email: "",
          number: "",
          name: {
            first: "",
            last: "",
          },
        },
      },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },

  methods: {
     handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    info(item, index, button) {
      this.infoModal.title = `UserId: ${index}`;
      this.infoModal.content = JSON.parse(JSON.stringify(item));
      console.log(this.infoModal.content);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = {};
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
<style src="./Tasks.scss" lang="scss" />
