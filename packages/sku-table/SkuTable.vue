<template>
  <div class="jui-sku-container">
    <div class="example">
      <table class="stock-table el-table el-table--border" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th
              v-for="(sp, sp_index) in specification"
              :key="sp_index"
            >
              {{ sp.name }}
            </th>
            <!-- <th>sku key</th> -->
            <th style="width: 160px;">销售价（元）</th>
            <th style="width: 160px;" v-if="showProductStock">库存</th>
            <th style="width: 160px;" v-if="showProductNo">规格编码</th>
            <th style="width: 160px;" v-if="showProductCost">成本价（元）</th>
            <th style="width: 100px;">是否启用</th>
          </tr>
        </thead>
        <tbody v-if="value.length>0">
          <tr v-for="(item,index) in value" :key="item.ProductSpec">
            <template v-for="(sp, sp_index) in specification">
              <td  v-if="showTd(sp_index, index)" :rowspan="countSum(sp_index+1)" :key="sp_index">
                {{ getSpecValue(sp_index, index) }}
              </td>
            </template>
            <td>
              <el-input-number
                v-model.number="item.ProductPrice"
                size="small"
                :min="0"
                :precision="2"
                placeholder="输入销售价"
                :disabled="!item.isUse || disabled"
              >
              </el-input-number>
            </td>
            <td v-if="showProductStock">
              <el-input-number
                v-model.number="item.ProductStock"
                size="small"
                :min="0"
                :controls="false"
                :precision="0"
                placeholder="输入库存"
                :disabled="!item.isUse || disabled"
              >
              </el-input-number>
            </td>
            <td v-if="showProductNo">
              <el-input
                v-model="item.ProductNo"
                size="small"
                type="text"
                :disabled="!item.isUse || disabled"
                placeholder="输入商品规格编号"
              >
              </el-input>
            </td>
            <td v-if="showProductCost">
              <el-input-number
                v-model.number="item.ProductCost"
                size="small"
                :min="0"
                :precision="2"
                :disabled="!item.isUse || disabled"
              >
              </el-input-number>
            </td>
            <td>
              <el-switch v-model="item.isUse" :disabled="disabled"></el-switch>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="wh-foot">
              <span class="label">批量设置：</span>
              <div v-if="isSetListShow" class="set-list">
                <span class="set-item" @click="openBatch('ProductPrice')">销售价</span>
                <span v-if="showProductStock" class="set-item" @click="openBatch('ProductStock')">库存</span>
                <span v-if="showProductCost" class="set-item" @click="openBatch('ProductCost')">成本价</span>
              </div>
              <div v-else class="set-form">
                <el-input-number v-model.number="batchValue" :controls="false" size="mini" :min="0" :precision="currentType=='ProductStock'?0:2" placeholder="输入要设置的数量"></el-input-number>
                <i class="set-btn blue el-icon-check" @click="setBatch"></i>
                <i class="set-btn red el-icon-close" @click="cancelBatch"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isShowCode" class="example">
      <textarea class="code-area" :value="JSON.stringify(value)"></textarea>
    </div>
  </div>
</template>

<script>
// 笛卡尔集合
function descartes(list) {
  return Array.prototype.reduce.call(list, function(a, b) {
    var ret = []
    a.forEach(function(a) {
      b.forEach(function(b) {
        ret.push(a.concat([b]))
      })
    })
    return ret
  }, [[]])
}

export default {
  name: 'JSkuTable',
  props: {
    defaultPrice:{
      type: Number,
      default: 1
    },
    // 是否显示json
    isShowCode: {
      type: Boolean,
      default: false
    },
    // 是否显示 商品编码
    showProductNo:{
      type: Boolean,
      default: true
    },
    // 是否显示成本
    showProductCost:{
      type: Boolean,
      default: true
    },
    // 是否显示库存
    showProductStock:{
      type: Boolean,
      default: true
    },
    specification: { // 规格
      type: Array,
      default: function() { return [] }
    },
    disabled:{ // 是否禁用
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
      // 默认商品编号
      defaultSkuNo: 'PRONO_',
      // 批量设置相关
      isSetListShow: true,
      batchValue: '', // 批量设置所绑定的值
      currentType: '' // 要批量设置的类型
    }
  },
  watch: {
    specification: {
      handler() {
        this.bulidSKUS()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 通过规格值计算sku 集合
    bulidSKUS() {
      const spValues = []
      this.specification.forEach(sp => {
        if (sp.value.length > 0)spValues.push(sp.value)
      })

      const descar = descartes(spValues)

      const netSKU = []
      descar.forEach(key => {
        if (key.length === 0) return
        const oldSp = this.getOldOrCreatData(JSON.stringify(key)) // 原数据存在则不重新赋值
        netSKU.push(oldSp)
      })

      // 清空原有集合   待完善 做对比
      this.value.length = 0
      this.value.push(...netSKU)
      this.$emit('input', this.value)
    },
    // 通过属性组合键 查询原数据 如果原来数据存在则重新赋值 不存在则创建新数据
    getOldOrCreatData(spec_key) {
      let data = {
        ProductCost: this.defaultPrice,
        ProductId: 0,
        ProductNo: 1,
        ProductPrice: this.defaultPrice,
        ProductSpec: spec_key,
        ProductStock: 999,
        isUse: true
      }
      this.value.forEach(res => {
        if (res.ProductSpec === spec_key) { data = res }
      })
      return data
    },
    // 获得属性值
    getSpecValue(specIndex, index) {
      // 获取当前规格项目下的属性值
      const currentValues = this.specification[specIndex].value
      let indexCopy

      // 判断是否是最后一个规格项目
      if (this.specification[specIndex + 1] && this.specification[specIndex + 1].value.length) {
        indexCopy = index / this.countSum(specIndex + 1)
      } else {
        indexCopy = index
      }

      const i = Math.floor(indexCopy % currentValues.length)

      if (i.toString() !== 'NaN') {
        return currentValues[i]
      } else {
        return ''
      }
    },
    // 根据规格索引  计算后面规格值值的数量 计算自身纵向跨度
    countSum(specIndex) {
      let num = 1
      this.specification.forEach((item, index) => {
        if (index >= specIndex && item.value.length) {
          num *= item.value.length
        }
      })
      return num
    },
    // 根据传入的条件，来判断是否显示该td
    showTd(specIndex, index) {
      // 如果当前项目下没有属性，则不显示
      if (!this.specification[specIndex]) {
        return false
      } else if (index % this.countSum(specIndex + 1) === 0) {
        return true
      } else {
        return false
      }
    },
    // 【 批处理相关 】
    // 打开设置框
    openBatch(type) {
      if(this.disabled) return // 禁用
      this.currentType = type
      this.isSetListShow = false
    },
    // 批量设置
    setBatch() {
      if (typeof this.batchValue === 'string') {
        this.$message({
          type: 'warning',
          message: '请输入正确的值'
        })
        return
      }
      this.value.forEach(item => {
        if (item.isUse) {
          item[this.currentType] = this.batchValue
        }
      })

      this.cancelBatch()
    },
    // 取消批量设置
    cancelBatch() {
      this.batchValue = ''
      this.currentType = ''
      this.isSetListShow = true
    }
  }
}
</script>