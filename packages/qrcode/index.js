// 导入组件，组件必须声明 name
import qrcode from './qrcode.vue'

// 为组件提供 install 安装方法，供按需引入
qrcode.install = function (Vue) {
  Vue.component(qrcode.name, qrcode)
}

// 默认导出组件
export default qrcode