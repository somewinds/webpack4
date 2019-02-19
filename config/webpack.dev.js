const path = require("path")

module.exports = {
  mode: 'development',
  // 入口文件配置项
  entry: {
    // 里面的main是可以随便写的
    main: './src/main.js',
    main2: './src/main2.js' // 这里新添加一个入口文件，作用？？？
  },
  //出口文件配置项
  output: {
    // 打包的路径
    path: path.resolve(__dirname, '../dist'),
    // 打包的文件名称
    filename: '[name].js' // 这里name是告诉我们入口进去的是什么名字，打包出来也同样是什么名字
  },
  // 模块：例如解读CSS，图片如何转换，压缩等
  module: {},
  // 插件：用于生产模块和各项功能
  plugins: [],
  // 配置webpack开发服务功能，如 热模块更新作用hot
  devServer: {}
}