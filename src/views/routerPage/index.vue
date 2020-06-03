<template>
  <div id="infoIndex">
      路由跳转过来的页面
  </div>
</template>
<script>

export default {
  name : "infoIndex",
  data(){
    return{

    }
  },
  created(){
    console.log(this.$route.params)
    const id = this.$route.params.id;
    const title = this.$route.params.title;

    // this.$store.commit('info/SET_ID',id);
    // this.$store.commit('info/SET_TITLE',title);
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
  #infoIndex{

  }
</style>
