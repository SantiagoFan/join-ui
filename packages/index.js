/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Btn from './Btn'
import Qrcode from './qrcode'
const version = '0.1.8'
// 存储组件列表
const components = [
  Btn,
  Qrcode
]
const install = Vue => {
  console.info('注册全部组件开始')
  // 遍历注册全局组件
  components.forEach(Component => {
    console.info('注册'+Component.name)
    console.info(Component)
    Vue.use(Component)
  })
  console.info('注册全部组件开始-')
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Btn,
  Qrcode
}
export default {
  install,
  version
}
