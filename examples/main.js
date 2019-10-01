import Vue from 'vue'
import App from './App.vue'

import jui from '../packages/index'

Vue.use(jui)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
