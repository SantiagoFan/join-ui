# sku 商品规格编辑组件


### 组合使用

<div class="demo-block">
  <sku-demo />
</div>

:::demo
```html
  <j-sku-spec v-model="specification" />
  <j-sku-table v-model="skus" :specification.sync="specification"></j-sku-table>
```
:::


## API

|     参数     |     说明     |     类型     |     默认值     |
|-------------|------------- |------------ |-------------- |
|   text    | 二维码转码内容  |    String    | - |  
|width      |     宽度      |    Number       |
|height     |     高度      |    Number       | 
|colorDark  |     前景颜色      |    String       |  #000
|colorLight |     背景颜色      |    String       |  #fff
