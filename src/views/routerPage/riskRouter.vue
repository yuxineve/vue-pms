<template>
    <div>
        冒号路由
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route.params)
        const id = this.$route.params.id;
        const title = this.$route.params.title;

        this.$store.commit('info/SET_ID',id);
        this.$store.commit('info/SET_TITLE',title);
    }
}
</script>
<style lang="less" scoped>

</style>