# 快速上手

----

## 安装

```
npm install join-ui --save
```

## 全局组件使用

```js
import jui from join-ui' // 引入组件库
```
最后，全局使用组件库
```js
Vue.use(jui)
```

引入`px`或者`vw`布局样式

```js
import 'vue-cards-demo/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局
import 'vue-cards-demo/lib/theme-chalk/index.vw.css' // vw单位，适用于移动端布局
```



## 单个组件按需使用
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
# 安装插件
npm i babel-plugin-import -D


可以局部注册所需的组件，适用于与其他框架组合使用的场景


```js

import { Qrcode } from 'join-ui'
// use or components
Vue.use(Qrcode)

```


在模板中，用 `<qrcode></qrcode>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <qrcode></qrcode>
  </div>
</template>
```


