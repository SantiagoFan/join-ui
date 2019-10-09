<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'

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

export default {
  name: 'app',
  components: {
    mainHeader,
    sideNav,
    mainFooter
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

<style lang="scss">
@import './assets/index';
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: '';
  clear: both;
  display: block;
}
.mobile-toggle-wrap {
  position: fixed;
  right: 70px;
  top: 18px;
  z-index: 999;
  display: flex;
  align-items: center;
  color: #628cf5;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid #628cf5;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 14px;
    opacity: 0.7;
  }
}
</style>