<template>
  <div id="Nav">
      <el-menu  default-active="1-4-1" 
                class="el-menu-vertical-demo" 
                @open="handleOpen" 
                @close="handleClose" 
                :collapse="isCollapse"
                background-color="transparent"
                text-color="#fff"
                router>
        <template  v-for="(item,index) in routers">
           <el-submenu :key="index" :index="String(index)">
            <!-- 一级菜单 -->
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.meta.name}}</span>
            </template>
            <!-- 子菜单 -->
            <el-menu-item-group>
              <el-menu-item v-for="(subItem) in item.children" :key="subItem.id"  :index="subItem.path">
                {{subItem.meta.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
  </div>
</template>
<script>
export default {
  name : "Nav",
  data(){
    return{
      isCollapse:false,
      routers:this.$router.options.routes,
    }
  },
  created(){
    console.log(this.$router.options.routes);
    // this.routers = this.$router.options.routes;
  },
  mounted(){

  },
  methods : {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components :{
    
  }
};
</script>
<style lang="scss" scoped>
    #Nav{
        // position: fixed;
        // top: 0;
				// left: 0;
				width:250px;
				height: 100vh;
				background:#344a57;
    }
</style>
