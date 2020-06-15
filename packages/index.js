/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import BgSelector from './BgSelector'
import FileGroup from './FileGroup'
import QRcode from './QRcode'
import SkuSpec from './SkuSpec'
import SkuTable from './SkuTable'
const version = '0.1.13'
// 存储组件列表
const components = [
  BgSelector,
  FileGroup,
  QRcode,
  SkuSpec,
  SkuTable
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(Component => {
    Vue.use(Component)
  })
};

/* istanbul ignore if */
// 判断是否是直接script引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  BgSelector,
  FileGroup,
  QRcode,
  SkuSpec,
  SkuTable
}
// 导出全部 适用按需引入写法
export { BgSelector, FileGroup, QRcode, SkuSpec, SkuTable }
