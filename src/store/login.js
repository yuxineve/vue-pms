//未使用模块（modules）
import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false, //导航状态
    count: 10,
  },
  getters: {
    //类似于 computed
    count: (state) => {
      return state.count + 10;
    },
  },
  mutations: {
    //更改状态值 ---------------- 同步
    setMenuState(state, value) {
      state.isCollapse = !state.isCollapse;
      //html5本地存储
      // localStorage  存储时间久  多用于登陆
      sessionStorage.setItem("isCollapse", JSON.stringify(state.isCollapse)); //存储一些小的东西，简单的，临时性的交互，刷新的状态
      Cookies.set("isCollapse", state.isCollapse); //携带cookies在请求头里
    },
    setCount(state, value) {
      state.count = value;
      console.log(state.count);
    },
  },
  actions: {
    //更改状态值 -------------------异步
    //同步修改mutations里面的state状态值
    setMenuState(content, data) {
      //content:csr

      content.commit("setMenuState");
      console.log(content);
    },
    //处理异步请求：请求接口返回参数后，接着去做别的事情
    /*
     *接口A和接口B 登陆页面使用dispatch
     * this.$store.dispatch('logonIn',params).then(() =>{
     *
     * }).catch(() =>{
     *
     * })
     */
    logonIn(content, params) {
      return new Promise((resolve, reject) => {
        //模拟 接口
        const login = "";
        login(params)
          .then((res) => {
            //缓存一些token，usename等信息
            resolve(res);//再做页面跳转
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
