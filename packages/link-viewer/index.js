import LinkViewer from './LinkViewer.vue'

  LinkViewer.install = function(Vue) {
    Vue.component(LinkViewer.name, LinkViewer)
}

export default LinkViewer

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(LinkViewer.name, LinkViewer)
}
