// vue.config.js
module.exports = {
    pages: {
        // 将entry 修改 src 目录 为 examples 目录
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
        .rule('js')
        .include
            .add('/packages/')
            .end()
        .use('babel')
            .loader('babel-loader')
            .tap(options => {
            // 修改它的选项...
            return options
            })
    },
    //Webpack 配置
    configureWebpack:{
        output:{
            library: 'join-ui',
            // 使用非闭包方式 解决 import {} from '' undefined
            libraryTarget: 'umd',
            filename: 'join-ui.js',
        }
    }
  }