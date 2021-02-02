const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    // 如果当前的选项是production，打包之后的代码就是压缩后的，如果是development，那就是没有打包的
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'index.[hash].min.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true
            }
        }),
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
        proxy: {
            '/user': 'http://127.0.0.1:8888',
            '/job': 'http://127.0.0.1:9999',
        }
    }
}