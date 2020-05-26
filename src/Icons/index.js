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

/*
* require.context：读取指定目录下的所有文件
* 参数：
* 第一个：指定目录
* 第二个：是否遍历子集目录
* 第三个：定义边理文件的规则
*/
const req = require.context('./svg', false, /\.svg$/); // 读取以.svg结尾的文件
const requireAll = requireContent => {
    console.log(requireContent)
    return requireContent.keys().map(requireContent)
}
requireAll(req);