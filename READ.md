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


# 发布页面

git subtree push --prefix dist origin gh-pages
直接运行代码：
npm run publish:docs