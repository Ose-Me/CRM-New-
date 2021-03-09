<template>
  <div class="users">
    <div class="mb-3">   
      <h1 class="page-title m-0 ml-2">Create User</h1>    
    </div>
    <b-card class="shadow-card pt-4">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row">
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="First Name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.firstName"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Last Name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.lastName"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Email"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Phone Number"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.phoneNumber"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Role name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Role"
              label-for="input-1"
            >
              <b-form-select v-model="form.roles" :options="options"></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Password"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.password"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Confirm Password"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.confirmPassword"
                placeholder=""
                class="mb-2"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        

        <div class="my-3 d-flex justify-content-end">
          <b-button class="mr-2" type="submit" variant="outline-info"
            >Cancel</b-button
          >
          <b-button type="reset" variant="info">Submit</b-button>
        </div>
      </b-form>
    </b-card>

    <!-- for checking form input values
        
        <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return { options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
      form: {
        firstName:"",
        lastName:"",
        roles: null,
       
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style src="./CreateUser.scss" lang="scss" scoped />