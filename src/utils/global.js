export default {
    install(Vue, options){
        Vue.prototype.test = () => {
            console.log("test global fun");
        }
    }
}