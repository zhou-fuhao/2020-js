const path = require('path');
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除之前打包的内容
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 抽离css的plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const TerserWebpackPlugin = require('terser-webpack-plugin');


module.exports = {
    // 配置打包入口文件的位置
    entry: './src/index.js',
    // 配置打包之后生成的文件夹的位置和文件的名字
    output: {
        // 文件夹的路径
        path: path.resolve('./build'),
        // 编译完成的文件名字
        // hash的值每一次打包生成的都不一样，就是为了让每一次打包之后的js的文件名都不一样
        // name代表entry中的属性名，打包之后的文件名就是name的值
        filename: 'index.[hash].min.js'
    },
    // 在webpack中使用plugins插件
    plugins: [
        // webpack在编译的时候，会把当前的模版html进行读取，然后把最新打包的js文件引入到模版中，生成一个新的html文件放到build文件夹中
        new HtmlWebpackPlugin({
            // 当前模版的路径
            template: './public/index.html',
            // 当前生成的html文件名
            filename: `index.html`,
            // 在当前html里引入js的链接上拼接一个hash值
            // 这里的hash和上面output中的hash是一样的，防止走缓存
            hash: true,
            // 指定当前html所要引入的js文件(对应的是entry中的入口文件)
            // chunks: ['index'],
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
        // 把css代码抽离成一个css文件
        new MiniCssExtractPlugin({
            filename: 'index.[hash].min.css'
        }),
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
        // proxy: {
        //     '/': 'http://127.0.0.1:6666',
        //     '/user': 'http://127.0.0.1:8888',
        //     '/job': 'http://127.0.0.1:9999',
        // }
    },
    // 在webpack中使用loader进行解析
    // 这里的loader解析的时候是按照从下到上，从右往左的顺序解析的
    module: {
        rules: [{
            test: /\.(less|css)$/i,
            use: [
                // 以外链式形式引入<link>标签
                MiniCssExtractPlugin.loader,
                // 把处理好的css样式内嵌到html页面内
                // "style-loader",
                // 处理css文件里@import
                "css-loader",
                // 处理兼容的(给样式增加前缀，必须配合postcss.config.js文件来一起编译)
                "postcss-loader",
                // 把less代码编译成css代码
                "less-loader"
            ]
        }, {
            test: /\.(jpg|png|jpeg|gif)$/i,
            // use: [ "file-loader" ]
            use: [{
                // url-loader 把图片转换成base64编码，在转换的时候有大小限制，如果图片小于2kb就会被base64编码，如果大于2kb还是用file-loader进行解析
                loader: 'url-loader',
                options: {
                    // 2 = 2kb  图片大小小于60kb
                    limit: 60 * 1024,
                    // 把生成的图片放置的路径
                    outputPath: './images',
                    // 自己指定生成图片的名字
                    name: '[name].[hash].[ext]',
                    // 在js中可以正常引入路径
                    esModule: false
                }
            }],
            // 那些路径下的资源会进行处理
            include: path.resolve('./src'),
            // 那些路径下的资源不会进行处理
            exclude: /node_modules/
        }, {
            // 处理html页面里的图片链接
            test: /\.html$/i,
            use: ['html-withimg-loader']
        }, {
            test: /\.js$/,
            use: [{
                    loader: 'babel-loader',
                    options: {
                        // 把es6转换成es5
                        presets: ['@babel/preset-env']
                    }
                },
                // eslint-loader开启词法检测
                "eslint-loader"
            ]
        }]
    },
    // 在webpack中配置优化项
    optimization: {
        // 压缩文件格式
        // 一旦配置minimizer数组之后，webpack自己默认的压缩配置就没了
        minimizer: [
            // 压缩css
            new OptimizeCssAssetsWebpackPlugin(),
            // 压缩js
            new TerserWebpackPlugin()
        ]
    }
}




// 放在package.json中
// "browserslist": [
//     "> 1%", // 只要市面上某个浏览器的使用量大于1%，那就做兼容
//     "last 2 version" // 只兼容浏览器最新的三个版本
// ]