# AdvancedQuery 高级查询构造器 组件



---


## 如何使用
<div class="demo-block">
   <advanced-query-demo />
</div>

:::demo
```html
 <j-advanced-query v-model="query" :fields="fields" @change="doquery" />
 <script>
export default {
  data(){
    return {
      query:null,
      fields:[
        {
          'name':'name',
          'label':'姓名',
          'type':'text'
        },
        {
          'name':'age',
          'label':'年龄',
          'type':'int'
        }
      ]
    }
  }
}
```
:::


## 可选字段 fields

| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| name   | 数据库字段名称   | string   | -   | -   |
| label   | 显示名称   | string   | -   | -   |
| type   | 类型   | string   | text</br>date</br>datetime  | text   |
| options   | Object   | {}   | 此对象的属性将绑定到值输入组件中  | {}   |


## 条件结果

| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
|condition  | 条件连接关系   | string   | and/or   | and |
| - field   | 数据库字段名称   | string   | -   | -   |
| - op   | 查询关系   | string   |等于  eq </br> 包含 contains </br>以..开始  start </br> 以..结尾  end </br>在...中  in</br>不等于 neq</br>大于  gt</br>大于等于 egt</br>小于  lt</br>小于等于elt   | eq 
| - value   | 查询值   | string   | -   | ""   |