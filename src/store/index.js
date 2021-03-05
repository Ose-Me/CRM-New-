import Vue from "vue";
import Vuex from "vuex";

import layout from "./Modules/layout";
import tasks from "./Modules/Tasks/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    tasks,
  },
});
