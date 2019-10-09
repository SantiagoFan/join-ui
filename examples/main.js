import Vue from 'vue'
import App from './App.vue'

// 全局引入
import jui from '~'
Vue.use(jui)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
