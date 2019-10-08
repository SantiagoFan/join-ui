import Vue from 'vue'
import App from './App.vue'

// import jui from '../packages/index'
// import { juiQrcode } from '../packages/index'

// console.info(jui)
// console.info(juiQrcode)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
