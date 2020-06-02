import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

import app from "./modules/app.js";
import info from "./modules/info.js";

export default new Vuex.Store({
  modules:{
    app
  }
});
