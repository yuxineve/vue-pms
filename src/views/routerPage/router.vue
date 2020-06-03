<template>
  <div id="infoCategory">
      <!-- 父组件传值给子组件 -->
      <svg-icon iconClass="partner font20" className="partner"/>
     
      <!-- 路由的跳转方式 -->

      <!-- 第一种：<router-link></router-link>
              传参方式分为两种：
                1、明文传参 query ：
                  接受参数方式：this.$route.query;
                  优势：页面刷新，参数不会丢失；
                  劣势：参数公开
                2、密文传参 param
                  接受参数方式：this.$route.params
                  优势：参数不显示
                  劣势：页面刷新，参数丢失
       -->

       <!-- HTML方式跳转： -->
      <router-link :to="{name:'InfoIndex',query:{id:1}}">
        <el-button>router-link-query-跳转</el-button>
      </router-link>
      <!-- JS方式跳转： -->
      <el-button @click="handlerJsLink">js-link-query-跳转</el-button>

      <!-- 第二种：冒号的形式传参
                接受参数方式：$route.params
                优势：页面刷新参数不会丢失；
                劣势：需要一一配置；
       -->
       <el-button @click="handlerRisk">冒号路由</el-button>

      <!-- 第三种：vuex结合HTML5本地存储
                优势：参数不显示；
                劣势：稍微有点大材小用（解决1.2的参数丢失）
       -->

       <!-- 第四种：新窗口的打开方式
              优势：参数不显示；
              劣势：稍微有点大材小用（解决1.2的参数丢失）
        -->
        <!-- HTML方式 -->
      <router-link tag="a" target="_blank" :to="{name:'InfoIndex',query:{id:333}}">
        <el-button >打开新窗口HTMl</el-button>
      </router-link>
        <!-- JS方式 -->
      <el-button @click="handlerOpenTagJS()">打开新窗口JS</el-button>
  </div>
</template>
<script>

export default {
  name : "infoCategory",
  data(){
    return{
      data:{
        id:1,
        title: "冒号路由"
      }
    }
  },
  create(){

  },
  mounted(){

  },
  methods : {
    handlerJsLink(){
      // 方式一：
      // this.$store.commit('info/SET_ID',1);
      // this.$store.commit('info/SET_TITLE','密文传参');

      // 方式二：
      this.$store.commit('info/UPDATE_STATE_VALUE',{
        id:1,
        title:'nihao',
      })

      this.$router.push({
        name:'InfoIndex',
        params:{
          id:1,
          title:'密文传参'
        }
      })
    },
    handlerRisk(){
      const data = this.data;
      this.$router.push({
        path:`riskRouter/${data.id}/${data.title}`
      })
    },
    handlerOpenTagJS(){
      const routerData = this.$router.resolve({
        name:'InfoIndex',
        query:{id:444},//或者：params:{id:5555}
      });
      window.open(routerData.href,'_blank');
    }
  },
  components :{
  }
};
</script>
<style lang="scss" scoped>
  #infoCategory{

  }
</style>
