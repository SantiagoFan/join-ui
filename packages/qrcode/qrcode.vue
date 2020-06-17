<template>
  <div>
    <div id="qrcode" ref="qrCodeDiv" class="qrcode-container" style="display: inline-block;"></div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'JQrcode',
  props: {
    text: {
      type: String,
      default: ' '
    },
    width: {
      type: Number,
      default: 132
    },
    height: {
      type: Number,
      default: 132
    },
    colorDark: {
      type: String,
      default: '#000'
    },
    colorLight: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      qrcode: null
    }
  },
  watch: {
    text: {
      handler() {
        this.build()
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.qrcode = new QRCode(this.$refs.qrCodeDiv, {
        width: this.width,
        height: this.height,
        text: this.text, // 二维码地址
        colorDark: this.colorDark,
        colorLight: this.colorLight,
        correctLevel: QRCode.CorrectLevel.L
      })
    })
  },
  methods: {
    build() {
      if (this.qrcode) {
        this.qrcode.makeCode(this.text) // 生成另一个新的二维码
      }
    }
  }

}
</script>

