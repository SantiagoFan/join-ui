// 导入组件，组件必须声明 name
import SkuSpec from './src/SkuSpec.vue'
import SkuTable from './src/SkuTable.vue'

// 为组件提供 install 安装方法，供按需引入
SkuSpec.install = function (Vue) {
  Vue.component(SkuSpec.name, SkuSpec)
}
SkuTable.install = function (Vue) {
  Vue.component(SkuTable.name, SkuTable)
}

export {
  SkuSpec, 
  SkuTable
}