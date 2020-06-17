// 导入组件，组件必须声明 name
import SkuTable from './SkuTable.vue'

// 为组件提供 install 安装方法，供按需引入
SkuTable.install = function (Vue) {
  Vue.component(SkuTable.name, SkuTable)
}

export default SkuTable