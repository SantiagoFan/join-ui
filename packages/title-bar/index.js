import TitleBar from './TitleBar.vue'

  TitleBar.install = function(Vue) {
    Vue.component(TitleBar.name, TitleBar)
}

export default TitleBar

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(TitleBar.name, TitleBar)
}
