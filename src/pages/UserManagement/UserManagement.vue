<template>
  <div class="dashboard">
    <div>
      <h1 class="page-title mb-3">User Management</h1>
      <div class="cards">
        <!-- projects card -->
        <router-link
          tag="a"
          :to="`${item.link}`"
          v-for="item in items"
          :key="item.title"
        >
          <div class="card py-3 px-4">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <p class="m-0 value">{{item.value}}</p>
                <p class="m-0 title">{{item.title}}</p>
              </div>
              <div
                class="icon-container d-flex justify-content-center align-items-center"
              >
                <img :src="`/assets/icon/${item.src}.svg`" alt="projects" />
              </div>
            </div>
            <!-- timestamp -->
            <div class="mt-2 d-flex align-items-center timestamp">
              <img src="/assets/icon/clock.svg" alt="time" />
              <span class="ml-2">{{item.timestamp}}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManagement",
  components: {},
  data() {
    return {
      items: [
        {
          title: "Manage Users",
          src: "users",
          timestamp: "last 24 hours",
          value: "13",
          link: "/app/usermanagement/users",
        },
        {
          title: "Manage Roles",
          src: "team",
          timestamp: "2mins ago",
          value: "5",
          link: "/app/usermanagement/roles",
        },
        
        
      ],
    };
  },
};
</script>
<style src="./UserManagement.scss" lang="scss" scoped />

