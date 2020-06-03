import router from "./index";
import { getToken , removeToken } from "@/utils/app";

const whiteRouter = ['/login'];

/*
 * 路由守卫（路由改变会触发beforeEach方法）
 */
router.beforeEach((to, from, next) => {
  console.log(to); // 下一个页面（进入的页面）
  console.log(from); //上一个页面（离开之前的页面）
  console.log(next);
  /*
   * next方法参数：
   * next()默认为 to,
   * next('/index') 参数可以为路径 死循环
   * next()
   */
  next();

  /*
   * token限制登陆
   */
  // if (getToken()) {
  //   if(to.path == '/login'){
  //     removeToken();
  //     next();
  //   }else{
  //     next();
  //   }
  //   console.log('存在');
  // } else {
  //   console.log('不存在');
  //   if(whiteRouter.indexOf(to.path) !== -1) {
  //       next();
  //   }else{
  //       next('/login')
  //   }
  // }
});
