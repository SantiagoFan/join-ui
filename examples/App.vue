<template>
  <div id="app">
    <div class="head">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="JOIN-UI 组件示例"/>
    </div>
    <h2>1.juiQrcode</h2>
    <qrcode text="http://www.nmgjoin.com"></qrcode>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import Clipboard from 'clipboard'

const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
    preEl.forEach((el) => {
        hljs.highlightBlock(el)
        const lang = el.children[0].className.split(' ')[1].split('-')[1]
        const pre = el
        const span = document.createElement('span')
        span.setAttribute('class', 'code-copy')
        span.setAttribute('data-clipboard-snippet', '')
        span.innerHTML = `${lang.toUpperCase()} | COPY` 
        pre.appendChild(span)
    })
  }

import HelloWorld from './components/HelloWorld.vue'
// 按需引入
import  { Qrcode }    from '~'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Qrcode,
  },
   mounted() {
    highlightCode()
    let clipboard = new Clipboard('.code-copy', {
        text: (trigger) => {
            return trigger.previousSibling.innerText
        }
    })
    // 复制成功执行的回调
    clipboard.on('success', (e) => {
        e.trigger.innerHTML = `已复制` 
    })
},

updated() {
    highlightCode()
}
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.head{
  text-align:center;
}
</style>
