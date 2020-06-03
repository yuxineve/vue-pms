const state =  {
    bbbb: true,
    id:'' || sessionStorage.getItem('infoId'),
    title:'' || sessionStorage.getItem('infoTitle'),
};
const getters =  {
    isCollapse:state => state.bbbb,
    //是否有那到值：
    infoId : state => state.infoId,
    infoTitle : state => state.infoTitle,
};
const mutations = {
    //使用 this.$store.commit(app/setMenuState)
    setMenuState(state, value){

    },
    // 两种方式：
    // 方式一：
    // SET_ID(state,value){
    //     state.id = value;
    //     console.log(state.id);
    //     sessionStorage.setItem('infoId',value)
    // },
    // SET_TITLE(state,value){
    //     state.title = value;
    //     sessionStorage.setItem("infoTitle", value);
    // }

    // 方式二：
    UPDATE_STATE_VALUE(state, params){
        for(let key in params){
            state[key] = params[key];
        }
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