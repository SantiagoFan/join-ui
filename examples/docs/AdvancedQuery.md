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
      query:{
        "list":[
          {"field":"name","op":"contains","value":"张"},
          {"field":"age","op":"gt","value":10},
          {"field":"age","op":"lt","value":50},
          {"field":"birthday","op":"eq","value":"2021-12-07"},
          {"field":"six","op":"eq","value":"男"}
        ],
        "condition":"and"
      },
      fields:[
        {
          'name':'name',
          'label':'姓名',
          'type':'text',
          
        },
        {
          'name':'age',
          'label':'年龄',
          'type':'number',
          'options':{
            min:0
          }
        },
        {
          'name':'birthday',
          'label':'出生日期',
          'type':'date'
        },
        {
          'name':'six',
          'label':'性别',
          'type':'select',
          'props':{
            'options':[
              {'value':'男','label':'男'},
              {'value':'女','label':'女'}
            ]
          }
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
| props   | Object   | {}   | 此对象的属性将绑定到值输入组件中  | {}   |


## 条件结果

| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
|condition  | 条件连接关系   | string   | and/or   | and |
| - field   | 数据库字段名称   | string   | -   | -   |
| - op   | 查询关系   | string   |等于  eq </br> 包含 contains </br>以..开始  start </br> 以..结尾  end </br>在...中  in</br>不等于 neq</br>大于  gt</br>大于等于 egt</br>小于  lt</br>小于等于elt   | eq 
| - value   | 查询值   | string   | -   | ""   |



## php 后端
AdvancedQuery 类
```php
<?php


namespace app\common;

use think\db\Query;

/**
 * AdvancedQuery 高级查询构造器
 * Class AdvancedQuery
 * @package app\common
 */
class AdvancedQuery
{
    public static function build($condition)
    {
        // 不含有效的条件
        if (!isset($condition) or count($condition['list'])==0){
            return '';
        }
        $where = [];
        // sql 转换
        foreach ($condition['list'] as $k=> $v){
            // 未设置字段名称
            if ($v['field']=='') {
                continue;
            }
            $sql = self::conversion($v);
            array_push($where,$sql);
        }
        // 拼接
        $separator = $condition['condition'] == 'or'?' or ':' and ';
        return implode($separator,$where);
    }

    /**
     * 条件转换
     * @param $item
     * @return string sql
     */
    private static function conversion($item):string{
        switch ($item['op']){
            // 相等
            case 'eq': return sprintf("%s = '%s'",$item['field'] ,$item['value']); break;
            // 包含
            case 'contains': return sprintf("%s like '%%%s%%'",$item['field'] ,$item['value']); break;
            // 以..开始
            case 'start': return sprintf("%s like '%s%%'",$item['field'] ,$item['value']); break;
            // 以..结尾
            case 'end': return sprintf("%s like '%%%s'",$item['field'] ,$item['value']); break;
            // 在...中
            case 'in': return sprintf("locate(%s,'%s')>0",$item['field'],$item['value']); break;
            // 不等于
            case 'neq': return sprintf("%s != '%s'",$item['field'] ,$item['value']); break;
            // 大于
            case 'gt':  return sprintf("%s > '%s'",$item['field'] ,$item['value']); break;
            // 大于等于
            case 'egt': return sprintf("%s >= '%s'",$item['field'] ,$item['value']); break;
            // 小于
            case 'lt': return sprintf("%s < '%s'",$item['field'] ,$item['value']); break;
            // 小于等于
            case 'elt': return sprintf("%s <= '%s'",$item['field'] ,$item['value']); break;
        }
    }
}
```
模型
```php
  $where['tid'] = '1'
  $query = self::where($where);
  // 查询
  if(isset($condition['query'])){
    $sql= AdvancedQuery::build($condition['query']);
    $sql && $query->whereRaw($sql);
  }

  $list = $query
            ->order($order, $sort)
            ->paginate($limit); 
```