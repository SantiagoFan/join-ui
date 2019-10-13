import Btn from './Btn'

  Btn.install = function(Vue) {
    Vue.component(Btn.name, Btn)
}

export default Btn

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(Btn.name, Btn)
}
