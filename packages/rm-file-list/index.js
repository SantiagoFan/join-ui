import RmFileList from './RmFileList'

  RmFileList.install = function(Vue) {
    Vue.component(RmFileList.name, RmFileList)
}

export default RmFileList

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(RmFileList.name, RmFileList)
}
