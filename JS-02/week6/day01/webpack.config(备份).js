// 当前webpack的自定义配置模块必须放在 根目录 下

// 在这里可以对webpack编译打包的过程进行自定义的配置
// webpack是基于node开发的，所以在配置的时候，用的是node里的导入导出规范

const path = require('path');
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除之前打包的内容
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    // 配置打包入口文件的位置
    entry: './src/index.js',
    // 配置打包之后生成的文件夹的位置和文件的名字
    output: {
        // 文件夹的路径
        path: path.resolve('./build'),
        // 编译完成的文件名字
        // hash的值每一次打包生成的都不一样，就是为了让每一次打包之后的js的文件名都不一样
        filename: 'index.[hash].min.js'
    },
    // 在webpack中使用plugins插件
    plugins: [
        // webpack在编译的时候，会把当前的模版html进行读取，然后把最新打包的js文件引入到模版中，生成一个新的html文件放到build文件夹中
        new HtmlWebpackPlugin({
            // 当前模版的路径
            template: './public/index.html',
            // 当前生成的html文件名
            filename: 'temporary.html',
            // 在当前html里引入js的链接上拼接一个hash值
            // 这里的hash和上面output中的hash是一样的，防止走缓存
            hash: true,
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
        }),
        // 清除之前打包的内容
        new CleanWebpackPlugin()
    ]
}