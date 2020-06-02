const state =  {
    bbbb: 100,
};
const getters =  {
    isCollapse:state => state.bbbb
};
const mutations = {
    //使用 this.$store.commit(app/setMenuState)
    setMenuState(state, value){

    }
};
const actions = {

};

/*
* 命名空间
*/
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};