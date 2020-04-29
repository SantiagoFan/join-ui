# sku 商品规格编辑组件
----

### 基础用法
`v-model` 对象为规格索引

<div class="demo-block">
  <sku-spec v-model="specification" />
</div>

:::demo
```html

 <sku-spec />
```
:::

### 拓展用法
通过控制 `colorDark` 修改二维码前景颜色 `width` `height` 修改二维码显示大小

<div class="demo-block">
   <SkuTable v-model="skus" :specification.sync="specification"></SkuTable>
</div>

:::demo
```html
<sku-table />
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
<script>
export default {
  data () {
    return {
      specification:[],
      skus:[]
    }
  }
}
</script>