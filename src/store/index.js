import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false, //导航状态
    count : 10,
  },
  getters:{ //类似于 computed
    count :state => {
      return state.count + 10;
    }
  },
  mutations: {//更待状态值
    setMenuState(state,value){
      state.isCollapse = !state.isCollapse;
      //html5本地存储
      // localStorage  存储时间久  多用于登陆
      sessionStorage.setItem("isCollapse",JSON.stringify(state.isCollapse));//存储一些小的东西，简单的，临时性的交互，刷新的状态
      Cookies.set("isCollapse", state.isCollapse);//携带cookies在请求头里
    },
    setCount(state,value){
      state.count = value;
      console.log(state.count);
    }
  },
  actions: {},
  modules: {},
});
