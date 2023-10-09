<template>
  <div class="">
    <j-sku-spec ref="skuSpec" v-model="specification" :isShowCode="true" />
    <el-button @click="verify">验证数据</el-button>
    <j-SkuTable ref="skuTable" v-model="skus" :defaultPrice="78.56" :isShowCode="true" :specification.sync="specification" 
    :showEnable="true"
    :showProductNo="true" :showProductCost="false"></j-SkuTable>
  </div>
</template>
<script>
export default {
  name: 'sku-demo',
  data(){
    return {
      specification:[ 
        { "name": "颜色", "value": [ "红色", "蓝色", "紫色" ] }, 
        { "name": "尺寸", "value": [ "L", "M", "N" ] } 
      ],
      skus:[]
    }
  },
  methods:{
    verify(){
      alert(this.$refs['skuSpec'].verify())
   }
  }
}
</script>