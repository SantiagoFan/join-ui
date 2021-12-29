<template>
  <div class="j-advanced-query">
    <el-tooltip effect="dark"
      :disabled="!isUse"
      placement="top-start">
      <div slot="content">
        已有高级查询条件生效 |
        <el-button type="text" @click="clear"> 清空</el-button>
      </div>
      <el-button
        :icon="isUse?'el-icon-loading':'el-icon-finished'"
        @click="showDialog"
        size="small"
      type="primary">
      高级查询
      </el-button>
    </el-tooltip>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" title="高级查询构造器" width="700px" :modal="false">
      <el-form :inline="true">
        <template v-if="isUse">
          <!-- 连接条件 -->
          <el-form-item label="条件连接关系">
            <el-select v-model="value.condition" size="small" style="width:250px">
                <el-option label="AND（所有条件都要求匹配）" value="and"></el-option>
                <el-option label="OR（条件中的任意一个匹配）" value="or"></el-option>
            </el-select>
          </el-form-item>
          
            <div class="row" v-for="(item,index) in value.list" :key="index">
              <!-- 字段名称 -->
              <el-form-item>
                <el-select v-model="item.field" size="small" style="width:150px" @change="itemFieldChange(item)" clearable placeholder="请选择字段">
                  <el-option
                    v-for="item in fields"
                    :key="item.name"
                    :label="item.label"
                    :value="item.name">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="item.op" size="small" style="width:100px">
                  <el-option
                    v-for="item in operator"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <!-- 数组类型 -->
                <el-input-number v-if="getFieldType(item.field)=='number'"  v-bind="getFieldProps(item.field)" v-model="item.value" size="small" :controls="false" style="width:180px"></el-input-number>
                <!-- 日期类型 -->
                <el-date-picker v-else-if="getFieldType(item.field)=='date'" v-bind="getFieldProps(item.field)" v-model="item.value" size="small" style="width:180px"></el-date-picker>
                <!-- 下拉选择类型 -->
                <el-select v-else-if="getFieldType(item.field)=='select'" v-bind="getFieldProps(item.field)" v-model="item.value" size="small" style="width:180px">
                  <el-option v-for="item in getFieldProps(item.field).options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <!-- 文本类型 -->
                <el-input v-else v-bind="getFieldProps(item.field)" v-model="item.value" clearable placeholder="请输入值" size="small" style="width:180px"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small"  type="primary" plain icon="el-icon-plus" @click="addItem()"></el-button>
                <el-button size="small"  type="danger" plain icon="el-icon-minus" @click="delItem(index)"></el-button>
              </el-form-item>
            </div>
          
        </template>
        <div v-else>
          <el-empty style="padding:0" :image-size="100" description="未添加任何查询条件">
             <el-button type="text" @click="addItem">点击添加</el-button>
          </el-empty>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clear">重置</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="commit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'JAdvancedQuery', 
  data () {
    return {
      dialogVisible:false,
      operator:[
        {'label':'等于','value':'eq'},
        {'label':'包含','value':'contains'},
        {'label':'以..开始','value':'start'},
        {'label':'以..结尾','value':'end'},
        {'label':'在...中','value':'in'},
        {'label':'不等于','value':'neq'},
        {'label':'大于','value':'gt'},
        {'label':'大于等于','value':'egt'},
        {'label':'小于','value':'lt'},
        {'label':'小于等于','value':'elt'},
      ]
    }

  },
  computed:{
    /**
     * 生效
     */
    isUse(){
      return this.value && Array.isArray(this.value.list) && this.value.list.length>0
    }
  },

  props: {
    value:{
      default:()=>{},
      type:Object
    },
    fields:{
      default:()=>[],
      type:Array
    }
  }, 

  methods: {
    clear(){
      this.$emit('input',null)
    },
    showDialog(){
      this.dialogVisible = true
    },
    commit(){
      this.dialogVisible = false
      if(this.isUse){
        this.$emit('change')
      }
    },
    /**
     * 获取字段 拓展属性
     */
    getFieldProps(field){
      var fieldInfo = this.fields.find(f=>f.name==field)
      if(fieldInfo){
        return fieldInfo['options'] || {}
      }
      else{
        return {}
      } 
    },
    /**
     * 获取字段 类型
     */
    getFieldType(field){
      var fieldInfo = this.fields.find(f=>f.name==field)
      if(fieldInfo){
        return fieldInfo.type
      }
      else{
        return 'text'
      } 
    },
    itemFieldChange(item){
      item.value = ''
    },
    addItem(){
      var temp = Object.assign({list:[],condition:'and'},this.value)
      temp.list.push({ field:'', op:'eq', value:''})
      this.$emit('input',temp)
    },
    delItem(index){
      this.value.list.splice(index, 1);
      this.$emit('input',this.value)
    }
  }
}
</script>