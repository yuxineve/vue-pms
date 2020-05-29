<template>
  <div id="Header">
    <div @click="clickList()">
      <svg-icon iconClass="partner" className="partner" class="svg-icon" ></svg-icon>
    </div>
      
  </div>
</template>
<script>
export default {
  name : "Header",
  data(){
    return{
      
    }
  },
  create(){

  },
  mounted(){

  },
  methods : {
    clickList(){
      this.$store.commit('setMenuState')
    }
  },
  components :{
    
  }
};
</script>
<style lang="scss" scoped>
    #Header{
        // position:fixed;
        height: 75px;
        background-color:#fff;
        // top: 0;
        // right: 0;
        // left: 250px;
        box-shadow:0 3px 16px 0 rgba(0 , 0 , 0 ,.1);
        .svg-icon{
          margin:20px;
        }
    }
</style>
