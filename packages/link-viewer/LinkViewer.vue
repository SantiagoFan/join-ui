<template>
  <el-popover class="j-linkViewer" placement="bottom" width="286" :trigger="trigger">
      <el-input :value="url" disabled size="small" style="width:200px;" />
      <el-button
        v-clipboard:copy="url"
        v-clipboard:success="clipboardSuccess"
        size="small"
        type="primary"
      >复制</el-button>
      <slot slot="reference"></slot>
      <div style="text-align: center;padding:10px;">
        <qrcode :width="200" :height="200" :text='url'></qrcode>
      </div>
    </el-popover>
</template>
<script>
import qrcode from '../qrcode'
import clipboard from '../clipboard/index.js' // use clipboard by v-directive
export default {
  name: 'JLinkViewer',
  components: { qrcode },
  directives: { clipboard },
  data () {
    return {
    }
  }, 
  props: {
    url: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    }
  }, 
  methods: {
    clipboardSuccess() {
      this.$message({ message: '复制成功', type: 'success', duration: 1500 })
    }
  }
}
</script>