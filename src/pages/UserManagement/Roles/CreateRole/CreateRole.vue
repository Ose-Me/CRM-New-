<template>
  <div id="create-role">
    <div class="mb-3">
      <div class="d-flex align-items-center">
       <h1 class="page-title m-0 ml-2">Create Role</h1>
      </div>
    </div>
    <b-card class="shadow-card">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Role name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder=""
            class="mb-2"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Role description"
          label-for="input-2"
          required
          
        >
          <b-form-textarea id="input-2" v-model="text" rows="4" max-rows="6">
          </b-form-textarea>
        </b-form-group>

        <div class="mb-2">
            <p>Permissions</p>
          <b-card-group deck>
            <b-card title="" header-tag="header" footer-tag="footer">
              <template #header>
                <div class="row d-md-flex d-none">
                  <div class="col-md-4">Permission name</div>
                  <div class="col-md-2 pr-5 d-md-flex justify-content-center">Read</div>
                  <div class="col-md-2 pr-5 d-md-flex justify-content-center">Create</div>
                  <div class="col-md-2 pr-5 d-md-flex justify-content-center">Edit</div>
                  <div class="col-md-2 pr-5 d-md-flex justify-content-center">Delete</div>
                </div>
              </template>

              <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.profileManagement"
                  id="checkboxes-3"
                  :aria-describedby="ariaDescribedby"
                >
                  <div class="row">
                    <div class="col-md-4">Profile Management</div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center align-items-center">
                      <b-form-checkbox value="read"></b-form-checkbox>
                       <span class="d-md-none d-inline">Read</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="create"></b-form-checkbox>
                      <span class="d-md-none d-inline">Create</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="edit"></b-form-checkbox>
                      <span class="d-md-none d-inline">Edit</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="delete"></b-form-checkbox>
                      <span class="d-md-none d-inline">Delete</span>
                    </div>
                  </div>
                </b-form-checkbox-group>
              </b-form-group>

              <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.taskManagement"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <div class="row">
                    <div class="col-md-4">Task Management</div>
                   <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center align-items-center">
                      <b-form-checkbox value="read"></b-form-checkbox>
                       <span class="d-md-none d-inline">Read</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="create"></b-form-checkbox>
                      <span class="d-md-none d-inline">Create</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="edit"></b-form-checkbox>
                      <span class="d-md-none d-inline">Edit</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="delete"></b-form-checkbox>
                      <span class="d-md-none d-inline">Delete</span>
                    </div>
                  </div>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.institutionTracking"
            id="checkboxes-5"
            :aria-describedby="ariaDescribedby"
          >
            <div class="row">
                    <div class="col-md-4">Institution tracking</div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center align-items-center">
                      <b-form-checkbox value="read"></b-form-checkbox>
                       <span class="d-md-none d-inline">Read</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="create"></b-form-checkbox>
                      <span class="d-md-none d-inline">Create</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="edit"></b-form-checkbox>
                      <span class="d-md-none d-inline">Edit</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="delete"></b-form-checkbox>
                      <span class="d-md-none d-inline">Delete</span>
                    </div>
                  </div>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.customerCare"
            id="checkboxes-6"
            :aria-describedby="ariaDescribedby"
          >
            <div class="row">
                    <div class="col-md-4">Customer care</div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center align-items-center">
                      <b-form-checkbox value="read"></b-form-checkbox>
                       <span class="d-md-none d-inline">Read</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="create"></b-form-checkbox>
                      <span class="d-md-none d-inline">Create</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="edit"></b-form-checkbox>
                      <span class="d-md-none d-inline">Edit</span>
                    </div>
                    <div class="col-md-2 pt-2 pt-md-0 d-flex justify-content-md-center  align-items-center">
                      <b-form-checkbox value="delete"></b-form-checkbox>
                      <span class="d-md-none d-inline">Delete</span>
                    </div>
                  </div>
          </b-form-checkbox-group>
        </b-form-group>
            </b-card>
          </b-card-group>
        </div>

        <div class="mt-5 mb-2 d-flex justify-content-end">
          <b-button class="mr-2" type="submit" variant="outline-danger"
            >Cancel</b-button
          >
          <b-button type="reset" variant="outline-success">Submit</b-button>
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
  name:"CreateRole",
  data() {
    return {
      form: {
        name: "",
        description: "",
        profileManagement: [],
        taskManagement: [],
        institutionTracking: [],
        customerCare: [],
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

<style src="./CreateRole.scss" lang="scss" scoped  />