<template>
  <div class="v-select">
     <el-select placeholder="请选择" v-model="selectValue">
      <el-option v-for="item in initOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selectValue:'',
      initOption:[],
      selectOptions:[
        {value: 'name', label: '姓名'},
        {value: 'id', label: 'ID'},
        {value: 'email', label:'邮箱'},
        {value: 'addres', label:'地址'}
      ]
    }
  },
  props: {
    cfg:{
      type: Object,
      default:() => {}
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //数据校验：
      if(this.cfg.Data.length === 0){
        console.log('初始数据为空')
        return false;
      }
      let arrOptions = [];
      this.cfg.Data.forEach(item => {
        let arr =this.selectOptions.filter((ele) => ele.value == item);
        if(arr.length > 0){
          arrOptions.push(arr[0]);
        }
      });
      if(arrOptions.length === 0){
          console.log('匹配数据为空')
          return false;
      }
      this.initOption = arrOptions;
      // if(arrOptions.length > 0){ //尽量在源头处理问题  不要在中间解决bug
      this.selectValue = arrOptions[0].value;
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.v-select{

}
</style>
<!--
组件说明：
  组件目录： src > components > v-selecu.vue
  组件引用方式：import v-select from "@/components/v-selecu"
  template: <v-select :cfg="cfg" />

  参数配置：
  cfg:{
      'Data':['name', 'id','email'],
  };
  cfg:数据类型 > Object
  Data:数据类型 > Array
  
  可配置的数据："name", "id", "email","addres"

-->