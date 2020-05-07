import FileGroup from './FileGroup'

  FileGroup.install = function(Vue) {
    Vue.component(FileGroup.name, FileGroup)
}

export default FileGroup

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(FileGroup.name, FileGroup)
}
