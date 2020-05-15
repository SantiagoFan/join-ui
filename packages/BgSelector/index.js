import BgSelector from './BgSelector'

BgSelector.install = function(Vue) {
    Vue.component(BgSelector.name, BgSelector)
}

export default BgSelector

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(BgSelector.name, BgSelector)
}
