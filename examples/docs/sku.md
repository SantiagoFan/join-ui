# sku 商品规格编辑组件


### 组合使用

<div class="demo-block">
  <sku-demo />
</div>

:::demo
```html
  <j-sku-spec v-model="specification" />
  <j-SkuTable v-model="skus" :specification.sync="specification" :showProductNo="true" :showProductCost="true"></j-SkuTable>
```
:::


## j-sku-spec 属性

|     参数     |     说明     |     类型     |     默认值     |
|-------------|------------- |------------ |-------------- |
|   value    | 规格集合  |    Array    | [] |  

## j-sku-table 属性

|     参数     |     说明     |     类型     |     默认值     |
|-------------|------------- |------------ |-------------- |
| value      | sku 集合      | Array  | [] |  
| specification      | 规格集合      | Array  | [] |  
| showProductStock      | 是否显示库存      | bool  | true |  
| showProductNo         | 是否显示商品编码  | bool  | true |
| showProductCost       | 是否显示成本价    | bool  | true |  
| isShowCode            | 是否显示sku代码（开发阶段）| bool  | true|