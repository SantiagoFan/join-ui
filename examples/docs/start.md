# 快速上手

----

## 安装

```
npm install join-ui --save
```

## 引入
### 方式一.自动按需引入组件 (推荐)
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```shell
# 安装插件
npm i babel-plugin-component -D
```
```
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    [
      "component",
      {
        "libraryName": "join-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
```
```
// 接着你可以在代码中直接引入 JoinUI 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Qrcode } from 'join-ui'
```
### 方式二.手动按需引入组件
在不使用插件的情况下，可以手动引入需要的组件。
```
import JBgSelector from 'join-ui/lib/bg-selector';
import 'join-ui/lib/theme-chalk/bg-selector.css';
```

### 方式三. 导入所有组件
JoinUI 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
```js
import Vue from 'vue';
import jui from 'join-ui' // 引入组件库
import 'join-ui/lib/index.css';

Vue.use(jui);
```
Tips: 配置按需引入后，将不允许直接导入所有组件。