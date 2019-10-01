// vue.config.js
module.exports = {
    pages: {
        // 将entry 修改 src 目录 为 examples 目录
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
  }