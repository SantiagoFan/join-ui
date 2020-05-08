# join-ui
### 灵集科技 UI组件库
https://santiagofan.github.io/join-ui/

github: https://github.com/SantiagoFan/join-ui  
Author: 464884785@qq.com  
PC端  推荐使用ElementUI     
移动端 推荐Vant 作为补充方案


## npm 安装
```
npm install join-ui -S
```

##  使用
```
// 按需引入
import {juiqrcode}  from 'join-ui'
Vue.use(juiqrcode)

// 完整引入
import jui from 'join-ui'
Vue.use(jui)
```
页面代码
```
<jui-qrcode text="http://www.nmgjoin.com"></jui-qrcode>
```
## NPM 源地址
```
https://www.npmjs.com/package/join-ui
https://npm.taobao.org/package/join-ui

```
# 组件列表

1. juiQrcode 二维码
2. SkuSpec      SKU 规格组件
3. SkuTable     SKU 规格参数组件
4. vuelist      移动端分页加载数据 混合对象

# 使用模板创建组件
npm run new:comp

# 发布文档页面

git subtree push --prefix dist origin gh-pages

npm run publish:docs

# 发布 npm
npm run lib 打包

npm login
npm publish

## 如果更换换淘宝仓库 需要发布npm 请使用下面命令
npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org