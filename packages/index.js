/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import AdvancedQuery from './advanced-query'
import BgSelector from './bg-selector'
import Clipboard from './clipboard'
import LinkViewer from './link-viewer'
import PositionSelector from './position-selector'
import Qrcode from './qrcode'
import SkuSpec from './sku-spec'
import SkuTable from './sku-table'
import SvgIcon from './svg-icon'
import TitleBar from './title-bar'
const version = '0.2.4'
// 存储组件列表
const components = [
  AdvancedQuery,
  BgSelector,
  Clipboard,
  LinkViewer,
  PositionSelector,
  Qrcode,
  SkuSpec,
  SkuTable,
  SvgIcon,
  TitleBar
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
  AdvancedQuery,
  BgSelector,
  Clipboard,
  LinkViewer,
  PositionSelector,
  Qrcode,
  SkuSpec,
  SkuTable,
  SvgIcon,
  TitleBar
}

