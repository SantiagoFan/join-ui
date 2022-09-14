import PositionSelector from './PositionSelector.vue'

  PositionSelector.install = function(Vue) {
    Vue.component(PositionSelector.name, PositionSelector)
}

export default PositionSelector

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(PositionSelector.name, PositionSelector)
}
