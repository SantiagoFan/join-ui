import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'

import JUI from '~/index'

const Demos = []

function importDemos(r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}

importDemos(require.context('@/demos', true, /\.vue$/))
Demos.map(component => Vue.component(component.name, component))

Vue.component('demo-block', demoBlock)
Vue.component('jui', JUI)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
