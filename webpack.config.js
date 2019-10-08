// webpack.config.js
module.exports = {
       output:{
        library: 'join-ui',
        // 使用非闭包方式 解决 import {} from '' undefined
        libraryTarget: 'umd',
        filename: 'join-ui.js',
    }
  }