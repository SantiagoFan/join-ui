// 导入组件，组件必须声明 name
import juiQrcode from './src/qrcode.vue'

// 为组件提供 install 安装方法，供按需引入
juiQrcode.install = function (Vue) {
  Vue.component(juiQrcode.name, juiQrcode)
}

// 默认导出组件
export default juiQrcode