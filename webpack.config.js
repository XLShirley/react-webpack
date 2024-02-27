/*
 * @Author: 肖玲
 * @Date: 2024-02-27 14:56:09
 * @LastEditTime: 2024-02-27 18:24:54
 * @LastEditors: 肖玲
 * @Description: 
 * @FilePath: /react-webpack/webpack.config.js
 * 文件备注
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // webpack入口文件，webpack从这里开始构建依赖图
    entry: {
        main: './src/index.jsx'
    },
    // 输出文件:.dist/bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack只能处理js和json文件，加载别的文件需要Loader处理，module就是配置Loader的地方
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        // 增加扩展选项，让webpack能够识别jsx文件
        extensions: ['.js', '.jsx']
    },
    // webpack加载html文件需要html-webpack-plugin插件处理
    // 启动webpack-dev-server的时候，会把打包好的js文件、css文件、html文件等放到内存中，然后在内存中运行
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    mode: 'development'
}


