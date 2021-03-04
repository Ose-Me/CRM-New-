<template>
  <div class="dashboard">
    <div class="container">
      <h3 class="mb-3">User Management</h3>
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
  name: "Dashboard",
  components: {},
  data() {
    return {
      items: [
        {
          title: "Manage Users",
          src: "users",
          timestamp: "last 24 hours",
          value: "13",
          link: "/usermanagement/manageusers",
        },
        {
          title: "Manage Roles",
          src: "team",
          timestamp: "2mins ago",
          value: "5",
          link: "/usermanagement/manageroles",
        },
        
        
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
h3 {
  font-weight: 600;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
      transform: scale(1.05, 1.05);
    }

    .card {
      position: relative;
      box-shadow: 0px 0px 20px 2px rgba(165, 162, 165, 0.15);
      border: transparent;
      min-height: 175px;

      .icon-container {
        padding: 10px;
        background: rgba(171, 71, 188, 0.2);
        border-radius: 5px;

        img {
          width: 35px;
        }
      }

      .title {
        color: #999;
        font-size: .9rem;
      }

      .value {
        font-size: 2.5rem;
      }

      .timestamp {
        font-size: 0.9rem;
        position: absolute;
        bottom: 5%;
      }
    }
  }
}
</style>
