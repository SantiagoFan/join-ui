// 导入组件，组件必须声明 name
import skuTable from './src/skuTable.vue'

// 为组件提供 install 安装方法，供按需引入
skuTable.install = function (Vue) {
  Vue.component(skuTable.name, skuTable)
}

// 默认导出组件
export default skuTable