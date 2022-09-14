<template>
  <div class="">
    <j-advanced-query v-model="query" :fields="fields" @change="doquery" />
    <div>
      <br>
      <h3>可选字段</h3>
      <div>{{JSON.stringify(fields)}}</div>
      <br>
      <h3>条件集合</h3>
      <div>{{JSON.stringify(query)}}</div>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: 'advanced-query-demo',
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
          'props':{
            min:0
          }
        },
        {
          'name':'birthday',
          'label':'出生日期',
          'type':'date'
        },
         {
          'name':'subtime',
          'label':'提交时间',
          'type':'datetime'
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
  },
  methods:{
    doquery(){
       this.$notify({
          title: '成功',
          message: 'change 事件回调 可进行查询',
          type: 'success'
        });
    }
  }
}
</script>