<template>
    <div>
        <el-dialog
            title="提示"
            :visible.sync="dialogChild"
            width="30%"
            @close="close">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
            </span>
        </el-dialog>
    </div>

</template>
<script>
    export default {
        name:"dialogInfo",
        data(){
            return{
                dialogChild:false
            }
        },
        created(){
            this.test();
        },
        methods:{
            close(){
                //子组件  -> 父组件
                //方式一：发射一个事件，可以处理更多的逻辑
                // this.$emit('closeDialog',false);

                //方式二：使用修饰符 .sync
                this.$emit("update:flag",false)

            }
        },
        props:{
            //父组件 =》 子组件
            flag:{
                type:Boolean,
                default:false
            }
        },
        watch:{
            //子组件获取父组件的值后，监听到最新的变化后的值传递给子组件
            flag:{
                handler(newValue , oldValue){
                    this.dialogChild = newValue;
                }
            }
        }
    }
</script>
<style lang="scss">

</style>

