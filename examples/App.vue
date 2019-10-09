<template>
  <div id="app">
    <div class="head">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="JOIN-UI 组件示例"/>
    </div>
    <h2>1.juiQrcode</h2>
    <qrcode text="http://www.nmgjoin.com"></qrcode>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 按需引入
import  { Qrcode }    from '~'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Qrcode,
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
