# 快速上手

----

## 安装

```
npm install vue-cards-demo --save
```

## 全局组件使用

```js
import VueCards from 'vue-cards-demo' // 引入组件库
```

引入`px`或者`vw`布局样式

```js
import 'vue-cards-demo/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局
import 'vue-cards-demo/lib/theme-chalk/index.vw.css' // vw单位，适用于移动端布局
```
最后，全局使用组件库
```js
Vue.use(VueCards)
```


## 单个组件按需使用
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
# 安装插件
npm i babel-plugin-import -D





可以局部注册所需的组件，适用于与其他框架组合使用的场景


```js

import { BaseCard } from 'VueCards'

Vue.use(BaseCard)

```


在模板中，用 `<vue-cards-base></vue-cards-base>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <vue-cards-base>这是一个基础卡片</vue-cards-base>
  </div>
</template>
```


