<template>
  <header
    class="page-header"
    :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'"
  >
    <div class="header-container">
      <a href="https://github.com/SantiagoFan/join-ui" target="__blank">
        <span class="name">MDS Vue 组件库</span>
      </a>
    </div>
  </header>
</template>
<script>
const pkg = require('../../package.json')
export default {
  data () {
    return {
      version:pkg.version
    }
  }
}
</script>
<style type="text/scss" lang="scss">
.page-header {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    a {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .name {
      color: #628cf5;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>