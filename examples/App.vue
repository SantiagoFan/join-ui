<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <jui-qrcode></jui-qrcode>
    <sku-table></sku-table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JUI from '../packages/index'
// import { juiQrcode,skuTable } from '../packages/index'
export default {
  name: 'app',
  components: {
    HelloWorld,
    // juiQrcode,
    // skuTable
  },
  mounted(){
    console.info(JUI);
    // console.info(juiQrcode)
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
