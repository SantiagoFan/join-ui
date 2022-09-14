<template>
  <div>
   
      <h3>数据</h3>
    {{position}}
    <br>
      <br>
      <div style="width:450px">
        <j-position-selector 
          map-key="NLBBZ-MWMWX-RRX4O-TOKQH-BQP2O-NOFOW"
          :lat.sync="position.lat"
          :lng.sync="position.lng"
          :address.sync="position.address" 
          :adcode.sync="position.adcode"
          :province.sync="position.province"
          :city.sync="position.city"
          :district.sync="position.district"
        />
      </div>
 
  </div>
</template>
<script>
export default {
  name: 'PositionSelectorDemo',
  data(){
    return {
      position:{
        lat:39.908802,
        lng:116.397502,
        address:'北京市东城区西长安街1号',
        adcode:'110101',
        province:'北京市',
        city:'北京市',
        district:'东城区'
      }
    }
  }
}
</script>