const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  //是否保存时检测
  lintOnSave: false,
  chainWebpack: (config) => {
    //方式一：
    // config.resolve.alias.set("@", resolve("./src"));
  },
  configureWebpack: (config) => {
    //方式 二：
    config.resolve = { //配置解析别名
      extensions:['.js','.josn','.vue'],//自动添加文件名后缀
      alias: {
        "vue":"vue/dist/vue.js",
        "@": path.resolve(__dirname, "./src"),
      },
    };
  },
};
