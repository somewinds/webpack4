const path = require("path")
const uglify = require("uglifyjs-webpack-plugin")
const htmlPlugin = require("html-webpack-plugin")

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
  module: {
    rules: [
      // css loader
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }
        ]
      },
      // 图片 loader
      {
        test: /\.(jpg|jpeg|png|gif)/, // 匹配图片文件后缀名称
        use: [
          {
            // 其实我们只安装一个url-loader就可以了。但是为了以后的操作方便，这里就顺便安装上file-loader
            loader: 'url-loader', // 指定使用的loader和loader的配置参数
            options: {
              limit: 8200 // 把小于500B的文件打成Base64的格式写入js
            }
          }
        ]
      }
    ]
  },
  // 插件：用于生产模块和各项功能
  plugins: [
    new uglify(), // js压缩插件
    new htmlPlugin({
      minify: { // 是对html文件进行压缩
        removeAttributeQuotes: true // removeAttributeQuotes 是却掉属性的双引号
      },
      hash: true, // 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存js
      template: './src/index.html' // 是要打包的html模板路径和文件名称
    })
  ],
  // 配置webpack开发服务功能，如 热模块更新作用hot
  devServer: {
    // contentBase 设置基本目录结构
    // 你要提供哪里的内容给虚拟服务器用。这里最好填 绝对路径。
    // 默认情况下，它将使用您当前的工作目录来提供内容。
    contentBase: path.resolve(__dirname, '../dist'),
    // host 服务器的IP地址，可以使用IP也可以使用localhost
    // 主机名
    host: 'localhost',
    // compress 服务端压缩是否开启
    // 开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用。
    compress: true,
    // port 配置服务端口号
    port: 8899
  }
}