// 导入组件，组件必须声明 name
import JuiQrcode from './src/qrcode.vue'

// 为组件提供 install 安装方法，供按需引入
JuiQrcode.install = function (Vue) {
  Vue.component(JuiQrcode.name, JuiQrcode)
}

// 默认导出组件
export default JuiQrcode