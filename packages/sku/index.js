// 导入组件，组件必须声明 name
import SkuTable from './src/SkuTable.vue'
import SkuSpec from './src/SkuSpec.vue'

// 为组件提供 install 安装方法，供按需引入
SkuTable.install = function (Vue) {
  Vue.component(SkuTable.name, SkuTable)
}
SkuSpec.install = function (Vue) {
  Vue.component(SkuSpec.name, SkuSpec)
}


// 默认导出组件
export  {
  SkuTable,
  SkuSpec
}