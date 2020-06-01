import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css";

//自定义全局方法
import global from  "@/utils/global.js";

//自定义全局组件
// vue.config.js 需要改变vue指向
// import "./Icons" //index文件可省略文件名字
import "./Icons/index.js"; 

Vue.use(global);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
