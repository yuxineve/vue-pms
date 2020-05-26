import Vue from "vue";
import SvgIcon from "./SvgIcon.vue"

// Vue.component("svg-icon", {
//   template: "<div>{{msg}}</div>",
//   data() {
//     return {
//       msg: "nihaoya",
//     };
//   },
// });

//抽出模板文件
Vue.component("svg-icon", SvgIcon);