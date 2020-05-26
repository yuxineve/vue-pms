<template>
  <div id="Content">
      我是内容
      <router-view />
  </div>
</template>
<script>
export default {
  name : "Content",
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
    
  }
};
</script>
<style lang="scss" scoped>
    #Content{
        margin:30px 30px 0;
        background:#fff;
        height: 100%;
    }
</style>
