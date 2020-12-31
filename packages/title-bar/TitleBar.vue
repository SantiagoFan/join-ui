<template>
  <div
    class="j-title-bar"
    :class="{'shadow':shadow,'radius':radius}"
    :style="{'background':background,'color':color }"
  >
    <span class="left">
      <span :class="icon"></span>
      <slot />
    </span>
    <span class="center"><slot name="center"></slot></span>
    <span class="right"><slot name="right" /></span>
  </div>
</template>

<script>
export default {
  name: 'JTitleBar',
  props: {
    shadow: { // 阴影
      type: Boolean,
      default: true
    },
    radius: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'icon'
    },
    background: { // 背景颜色
      type: String,
      default: '#ffffff'
    },
    color: { // 文字颜色
      type: String,
      default: '#00000'
    }
  }
}
</script>
