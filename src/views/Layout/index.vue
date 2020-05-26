<template>
  <div id="Login">
    <LayoutNav />
    <div class="lay-right">
      <LayoutHeader />
      <LayoutContent />
    </div>
  </div>
</template>
<script>
import LayoutNav from './components/Nav.vue';
import LayoutHeader from './components/Header.vue';
import LayoutContent from './components/Content.vue';

export default {
  name : "Login",
  data(){
    return{

    }
  },
  create(){

  },
  mounted(){

  },
  methods : {

  },
  components :{
    LayoutNav,
    LayoutHeader,
    LayoutContent
  }
};
</script>
<style lang="scss" scoped>
  #Login{
    display:flex;
    .lay-right{
      display:flex;
      flex-direction:column;
      flex:1;
    }
  }
</style>
