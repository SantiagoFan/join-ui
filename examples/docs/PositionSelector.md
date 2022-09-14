# PositionSelector 组件
---
PositionSelector 是使用腾讯地图为基础的地理位置选择器，使用前需替换自己的 map-key（在腾讯地图开放平台获取）  
可通过点击地图位置选择地址，或者通过搜索选择热点地址


## 如何使用
### 1.基于绑定的方式
<div class="demo-block">
  <position-selector-demo/>
</div>

:::demo
```html
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
```
:::
### 1.基于事件的方式
<div class="demo-block">
   <j-position-selector 
          map-key="NLBBZ-MWMWX-RRX4O-TOKQH-BQP2O-NOFOW"
        />
</div>

:::demo
```html
  <j-position-selector 
    map-key="NLBBZ-MWMWX-RRX4O-TOKQH-BQP2O-NOFOW"
    @change="positionChange"
    />
```
:::



## Attributes 属性

| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| -   | -   | -   | -   | -   |
| map-key   | 腾讯地图申请的key  | String   | 必填   | -   |
| lng   | 经度   | -   | -   | -   |
| lat   | 纬度   | -   | -   | -   |
| address   | 详细地址   | -   | -   | -   |
| adcode   | 区域代码   | -   | -   | -   |
| province   | 省   | -   | -   | -   |
| city   | 市   | -   | -   | -   |
| district   | 区   | -   | -   | -   |

## Event 事件
| 参数  | 说明  | 返回值  |
|-----|-----|-----|
| -   | -   | -   |
| change   | 选择地址后触发  | { "lat": 39.908802, "lng": 116.397502, "address": "北京市东城区西长安街1号", "adcode": "110101", "province": "北京市", "city": "北京市", "district": "东城区" }    |


