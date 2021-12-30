import AdvancedQuery from './AdvancedQuery.vue'

  AdvancedQuery.install = function(Vue) {
    Vue.component(AdvancedQuery.name, AdvancedQuery)
}

export default AdvancedQuery

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(AdvancedQuery.name, AdvancedQuery)
}
