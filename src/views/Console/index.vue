<template>
    <div id="console">
        首页
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <dialogInfo :flag.sync="dialogVisible" @closeDialog="close" ></dialogInfo>
        <VSelection :cfg="cfg" />
    </div>
</template>
<script>
import dialogInfo from "../dialog/add.vue"
import VSelection from "@/components/v-selecu.vue";

export default {
    name:'index',
    data(){
        return{
            dialogVisible:false,
            cfg:{
                'Data':['name', 'id','email'],
            }
        }
    },
    components: {
        dialogInfo,
        VSelection
    },
    methods:{
        close(){
            this.dialogVisible = false;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>