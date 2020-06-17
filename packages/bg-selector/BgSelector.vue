<template>
  <div class="jui-bgSelector-container">
    <el-popover
      v-model="visible"
      placement="right"
      width="333"
      :disabled="disabled"
      trigger="click"
    >
      <div slot="reference" class="item" :class="{'disabled':disabled,[value]:true}">{{ title }}
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="jui-bgSelector-container">
        <div v-for="(item,index) in list" :key="index" class="item" :class="item.name" @click="select(item)">{{ item.title }}</div>
        <div class="item" @click="clear()"><i class="el-icon-circle-close"></i></div>
      </div>
    </el-popover>

  </div>
</template>
<script>
export default {
  name: 'JBgSelector',
  props: {
    value: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      visible: false,
      list: [
        { title: '魅红', name: 'bg-gradual-red' },
        { title: '鎏金', name: 'bg-gradual-orange' },
        { title: '翠柳', name: 'bg-gradual-green' },
        { title: '靛青', name: 'bg-gradual-blue' },
        { title: '惑紫', name: 'bg-gradual-purple' },
        { title: '霞彩', name: 'bg-gradual-pink' },
        { title: '嫣红', name: 'bg-red', color: '#e54d42' },
        { title: '桔橙', name: 'bg-orange', color: '#f37b1d' },
        { title: '明黄', name: 'bg-yellow', color: '#fbbd08' },
        { title: '橄榄', name: 'bg-olive', color: '#8dc63f' },
        { title: '森绿', name: 'bg-green', color: '#39b54a' },
        { title: '天青', name: 'bg-cyan', color: '#1cbbb4' },
        { title: '海蓝', name: 'bg-blue', color: '#0081ff' },
        { title: '姹紫', name: 'bg-purple', color: '#6739b6' },
        { title: '木槿', name: 'bg-mauve', color: '#9c26b0' },
        { title: '桃粉', name: 'bg-pink', color: '#e03997' },
        { title: '棕褐', name: 'bg-brown', color: '#a5673f' },
        { title: '玄灰', name: 'bg-grey', color: '#8799a3' },
        { title: '草灰', name: 'bg-gray', color: '#aaaaaa' },
        { title: '墨黑', name: 'bg-black', color: '#333333' },
        { title: '雅白', name: 'bg-white', color: '#ffffff' }
      ]
    }
  },
  computed: {
    title() {
      var t = '未设置'
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].name === this.value) { return this.list[i].title }
      }
      return t
    }
  },
  methods: {
    select(item) {
      this.visible = false
      this.$emit('input', item.name)
    },
    clear() {
      this.visible = false
      this.$emit('input', null)
    }
  }
}
</script>