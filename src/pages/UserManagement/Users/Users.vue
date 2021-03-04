<template>
  <div class=" users">
    <div class="d-flex justify-content-between mb-3">
      <div class="d-flex align-items-center">
      <h1 class="page-title m-0 ml-2">Manage Users</h1>
      </div>
      <router-link tag="a" :to="'/app/usermanagement/users/createuser'">
        <div class="full-btn d-flex justify-content-center align-items-center">
          <span> Create</span>
        </div>
      </router-link>
    </div>

    <b-row class="mb-3">
      <b-col sm="5" md="6" lg="6" class="my-1">
        <b-form-group
          label=""
          label-for="filter-input"
          label-cols-sm="0"
          label-align-sm="left"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <div class="card p-0">
      <b-table
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        striped
        show-empty
        small
        @filtered="onFiltered"
      >
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>

        <!-- <template #cell(isActive)="row">
           <b-badge
                        :variant="row.value.isActive === 'true'
                          ? 'success'
                          : row.value.isActive === 'false' ? 'danger' : 'info'"
                        pill
                      >
                        {{row.value.isActive}}
                      </b-badge>
        </template> -->

        <template #cell(actions)="row">
          <b-dropdown id="dropdown-right" right text="" class="m-2">
            <template #button-content>
              <img src="/assets/icon/options.svg" alt="" />
            </template>
            <b-dropdown-item @click="info(row.item, row.index, $event.target)"
              >view</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Edit</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Delete</b-dropdown-item>
          </b-dropdown>
        </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">
                {{ key }}: {{ value }}
              </li>
            </ul>
          </b-card>
        </template>
      </b-table>
    </div>

    <div class="row d-flex justify-content-center py-3">
      <b-col sm="7" md="4" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        >
        </b-pagination>
      </b-col>
    </div>

    <!-- user Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <p>
        Name: {{ infoModal.content.name.first }}
        {{ infoModal.content.name.last }}
      </p>
      <p>Email: {{ infoModal.content.email }}</p>
      <p>Phone Number: {{ infoModal.content.number }}</p>
      <p>
        Status:
        <span
          class=""
          v-bind:class="{
            '': infoModal.content.isActive === true,
            '': infoModal.content.isActive === false,
          }"
        >
          {{ infoModal.content.isActive }}
        </span>
      </p>
    </b-modal>
    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  name: "Users",
  components: {},
  data() {
    return {
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
<style src="./Users.scss" lang="scss" />
