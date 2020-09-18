# svg icon 图标组件  

SVG 图标的优势，可通过font-size 控制大小，可通过color 控制颜色，如果需要多色可在svg 文件内容控制多色
可在图标网站下载图标库或者插画库 
[阿里巴巴图标站](https://www.iconfont.cn/)
----

### 基础用法
`icon-class` 内容为图标文件名称

<div class="demo-block">
  <div style="font-size:30px;">
    <svg-icon icon-class="user" />
  </div>
  <div style="font-size:30px;color:#1b82f1">
    <svg-icon icon-class="exit" />
  </div>
  <div style="width:200px;height:200px;">
    <svg-icon icon-class="setting" type="illustration" />
  </div>
</div>

:::demo
```html
<div style="font-size:30px;">
    <svg-icon icon-class="user" />
  </div>
  <div style="font-size:30px;color:#1b82f1">
    <svg-icon icon-class="exit" />
  </div>
  <div style="width:200px;height:200px;">
    <svg-icon icon-class="setting" type="illustration" />
  </div>
```
:::

### 项目配置
#### 1.安装碧图处理包
```
npm install svg-sprite-loader -D
```
#### 2.配置svg 图片处理loader
方式1
```json
{
      test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
        exclude: [resolve('src/icons')]
      },
```
方式2 vue cli3
```json
module.exports = {
  chainWebpack: config => {
    // svg icon 图标
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(resolve('src/icons')) // 存放svg 图标图片的文件夹
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({ symbolId: 'icon-[name]' })
  }
}
```

手都引入文件
```
const requireAll = requireContext => requireContext.keys().map(requireContext)
const reqIcon = require.context('./icons', false, /\.svg$/)
requireAll(reqIcon)
```

## API

|     参数     |     说明     |     类型     |     默认值     |
|-------------|------------- |------------ |-------------- |
|iconClass      |     自定义图标名称      |    String       |
|className     |     自定义类名      |    String       | 
|type  |     图标类型      |    String（icon/illustration）       |  icon
