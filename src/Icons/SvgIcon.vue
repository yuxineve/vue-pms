<template>
    <!-- <div> -->
        <!-- {{plusNum}}
        <el-button @click="clickComputed()">按钮</el-button> -->
        <svg :class="svgClass"  aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
    <!-- </div> -->
</template>
<script>
export default {
    name : "svgIcon",
    // 方式一
    // props : ['iconClass', 'className'],
    // 方式二
    props: {
        iconClass:{
            type: String,
            /*
            * 如果type不是基础数据类型是引用类型，应该返回一个
            * Es6：default：()=> []
            * ES5：default:function(){
            *   return [];
            * }
            */
            default:"", 
            required:true,//是否是必填项
            validator:(value) =>{//校验规则
                return value;
            }
        },
        className:{
            type:String,
            default:'',
        }
    },
    data(){
        return{
            msg:"nihaoyama",
            count:1,
        }
    },
    created(){
        console.log(this._props.iconClass)
    },
    mounted(){
    },
    methods:{
        clickComputed(){
            //当执行到这里时，就会执行computed 最后值为21
            this.count ++;
        }
    },
    computed:{
        //监听属性变化，并计算属性
        //计算总金额
        plusNum:{
            get: function(){
                return this.count * 10;
            },
            set: function(val) {
                this.count = val -1;
            }
        },
        iconName:{
            get: function(){
                return `#icon-${this._props.className}`;
            }
        },
        svgClass:{
            get: function(){
                if(this._props.iconClass){
                    return `svg-icon ${this._props.iconClass}`;
                }else{
                    return `svg-icon`;
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
	.svg-icon{
		// font-size:20px;
		width:20px;
		height: 20px;
		fill:currentColor;
		color: blue;
		&.font20{
			font-size: 20px;
		}
	}
</style>