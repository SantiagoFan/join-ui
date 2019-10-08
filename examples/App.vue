<template>
  <div id="app">
    <div class="head">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="JOIN-UI 组件示例"/>
    </div>
    <h2>1.juiQrcode</h2>
    <jui-qrcode text="http://www.nmgjoin.com"></jui-qrcode>
     <h2>2.SkuSpec</h2>
    <sku-spec v-model="sku_keys"></sku-spec>
    <h2>3.SkuTable</h2>
    <sku-table v-model="sku_values" :specification.sync="sku_keys"></sku-table>
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 按需引入
import  { juiQrcode,SkuTable,SkuSpec }    from '~'

export default {
  name: 'app',
  components: {
    HelloWorld,
    juiQrcode,
    SkuTable,
    SkuSpec
  },
  data(){
    return{
      sku_keys:[],
      sku_values:[],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.head{
  text-align:center;
}
</style>
