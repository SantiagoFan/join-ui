<template>
  <div class="jui-sku-container">
    <!-- 规格设置 -->
    <div class="specification">
      <ul class="spec-list">
        <li v-for="(item, index) in value" :key="index" class="item">
          <div class="name">
            <el-input v-model="item.name" :disabled="disabled" size="small" placeholder="输入产品规格名称"></el-input>
            <i class="icon el-icon-circle-close" @click="delSpec(index)"></i>
          </div>
          <div class="values">
            <span v-for="(tag, num) in item.value" :key="tag" class="el-tag">
              <span class="el-select__tags-text">{{ tag }}</span>
              <i class="el-tag__close el-icon-close"  @click="delSpecTag(index, num)"></i>
            </span>
            <div class="add-attr">
              <el-input 
                v-model="addValues[index]" 
                size="small" 
                placeholder="多个产品属性以空格隔开"
                icon="plus"
                :disabled="disabled"
                @click="addSpecTag(index)"
                @keyup.native.enter="addSpecTag(index)
              "></el-input>
            </div>
          </div>
        </li>
        <li class="item" v-if="value.length < limit">
          <div class="add-spec">
            <el-button plain :disabled="disabled" size="small" type="info" @click="addSpec">添加规格项目</el-button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="isShowCode" class="example">
      <textarea class="code-area" :value="JSON.stringify(value)"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JSkuSpec',
  props: {
    // 最多可添加规格项
    limit:{
      type: Number,
      default:10
    },
    // 是否显示json
    isShowCode: {
      type: Boolean,
      default: false
    },
    value: { // 规格
      type: Array,
      default: function() { return [] }
    },
    disabled:{ // 是否禁用
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 用来存储要添加的规格属性
      addValues: []
    }
  },
  watch: {
    value: {
      handler: function() {
        this.$emit('update:model', this.value)
      },
      deep: true
    }
  },
  methods: {
    // 添加规格项目
    addSpec() {
      if (this.value.length < this.limit) {
        this.value.push({
          name: '',
          value: []
        })
      }
    },

    // 删除规格项目
    delSpec(index) {
      this.value.splice(index, 1)
    },

    // 添加规格属性
    addSpecTag(index) {
      let str = this.addValues[index] || ''
      if (!str.trim()) return // 判空
      str = str.trim()
      const arr = str.split(/\s+/) // 使用空格分割成数组

      let newArr = this.value[index].value.concat(arr)
      newArr = Array.from(new Set(newArr)) // 去重
      this.$set(this.value[index], 'value', newArr)

      this.clearAddValues(index)
    },

    // 删除规格属性
    delSpecTag(index, num) {
      if(this.disabled) return // 禁用不可删除
      this.value[index].value.splice(num, 1)
    },

    // 清空 addValues
    clearAddValues(index) {
      this.$set(this.addValues, index, '')
    }
  }
}
</script>