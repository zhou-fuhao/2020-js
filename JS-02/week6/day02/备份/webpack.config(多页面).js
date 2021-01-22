const path = require('path');
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除之前打包的内容
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// webpack在编译的时候，会把当前的模版html进行读取，然后把最新打包的js文件引入到模版中，生成一个新的html文件放到build文件夹中
let arr = ['index', 'login'].map(item => {
    return new HtmlWebpackPlugin({
        // 当前模版的路径
        template: `./public/${item}.html`,
        // 当前生成的html文件名
        filename: `${item}.html`,
        // 在当前html里引入js的链接上拼接一个hash值
        // 这里的hash和上面output中的hash是一样的，防止走缓存
        hash: true,
        // 指定当前html所要引入的js文件
        chunks: [item],
        // 配置压缩的
        minify: {
            // 把标签之间的空格去掉
            collapseWhitespace: true,
            // 去掉注释
            removeComments: true,
            // 把属性的双引号去掉
            removeAttributeQuotes: true,
            // 去掉行间的空属性
            removeEmptyAttributes: true
        }
    })
});

module.exports = {
    // 配置打包入口文件的位置
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    // 配置打包之后生成的文件夹的位置和文件的名字
    output: {
        // 文件夹的路径
        path: path.resolve('./build'),
        // 编译完成的文件名字
        // hash的值每一次打包生成的都不一样，就是为了让每一次打包之后的js的文件名都不一样
        // name代表entry中的属性名，打包之后的文件名就是name的值
        filename: '[name].[hash].min.js'
    },
    // 在webpack中使用plugins插件
    plugins: [
        // webpack在编译的时候，会把当前的模版html进行读取，然后把最新打包的js文件引入到模版中，生成一个新的html文件放到build文件夹中
        ...arr,
        // 清除之前打包的内容
        new CleanWebpackPlugin()
    ],
    // 配置一个类似于live server的功能(仅为了开发使用)，自动创建一个web服务，并打开一个网页，改了代码后页面自动更新，还可以配置Proxy代理
    devServer: {
        // 监听的端口号
        port: 3000,
        // 是否压缩
        compress: true,
        // 资源路径
        contentBase: path.resolve('./build'),
        // 自动打开浏览器
        open: true,
        // 开启热更新
        hot: true,
        // 反向代理
        proxy: {
            '/': 'http://127.0.0.1:6666',
            '/user': 'http://127.0.0.1:8888',
            '/job': 'http://127.0.0.1:9999',
        }
    }

}