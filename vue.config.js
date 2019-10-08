const path = require('path')
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
    chainWebpack: config => {
        // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'));
        // lib目录是组件库最终打包好存放的地方，不需要eslint检查
        // examples/docs是存放md文档的地方，也不需要eslint检查
        config.module
            .rule('eslint')
            .exclude.add(path.resolve('lib'))
            .end()
            .exclude.add(path.resolve('examples/docs'))
            .end();
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    }
  }