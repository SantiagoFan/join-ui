<template>
  <div class="j-position-selector">
    <el-card shadow="hover">
      <div slot="header" style="padding:0px 10px;">
        <span><i class="el-icon-map-location"></i> 地址坐标</span>
        <el-button style="float: right; padding: 10px 0" type="text" @click="showMap">选择地址</el-button>
      </div>
      <div class="item">
        <el-row>
          <span>地址：{{ address?address:'未设置' }}</span>
        </el-row>
        <el-row class="sub-info">
          <el-col :span="12">经度：{{ lng }}</el-col>
          <el-col :span="12">纬度：{{ lat }}</el-col>
        </el-row>
      </div>
    </el-card>
    <!-- 弹窗选择 -->
    <el-dialog custom-class="map-dialog" :visible.sync="dialogVisible" title="选择地图" width="1000px">
      <div class="map">
        
        <!-- 地图 -->
        <div id="map" ref="container" style="width:100%; height:500px;"></div>
        <div class="address-search">
          <el-input v-model="detail.address" @input="getSuggestions" placeholder="请输入地址来直接查找相关位置"></el-input>
        </div>
        <div v-if="nearPois.length>0" class="address-list">
          <div v-for="(item, index) in nearPois" :key="index" class="items" @click="selectAddress(item)">
            <div class="address-title">{{ item.title }}</div>
            <div class="address-info">{{ item.address }}</div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-input disabled v-model="center.lng" placeholder="坐标经度">
              <template slot="prepend">经度</template>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input disabled v-model="center.lat" placeholder="坐标纬度">
              <template slot="prepend">纬度</template>
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="Select">确 定</el-button>
          </el-col>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'JPositionSelector',
  props: {
    mapKey:{
      type:String,
      default:''
    },
    lng:{
      type:Number,
      default:116.397502
    },
    lat:{
      type:Number,
      default:39.908802
    },
    adcode:{
      type:String,
      default:''
    },
    province:{
      type:String,
      default:''
    },
    city:{
      type:String,
      default:''
    },
    district:{
      type:String,
      default:''
    },
    address:{
      type:String,
      default:''
    }
  },

  data() {
    return {
      dialogVisible: false,
      TMap: null,// 对象
      map: null, // 实例
      marker: null, // 标记点
      center: {
        height:0,
        lng: null,
        lat: null
      },
      detail:{ //地址临时分量
        adcode:'',
        province:'',
        city:'',
        district:'',
        address:''
      },
      searchService:null, //关键字搜索服务
      suggestService:null,// 搜索建议服务
      geocoderService:null,// 地址解析
      nearPois: [],// 附近搜索建议
    }
  },
  methods: {
    showMap() {
      this.dialogVisible = true
      this.init()
    },
    init(){
      if(this.map){return}
      this.initMap().then(TMap=>{
        // 中心点
        this.center = new TMap.LatLng(this.lat||39.908802, this.lng||116.397502)
        this.TMap = TMap;
        this.map = new TMap.Map("map", {
          center: this.center, //设置地图中心点坐标
          zoom: 15, //设置地图缩放级别
          viewMode: "2D",
        })
        //监听点击事件
        this.map.on("click",this.mapClick);
        // 初始化点
        this.initMaker(this.center)
        // 搜索服务
        // this.searchService = new TMap.service.Search({ pageSize: 10 });
        // 输入建议服务
        this.suggestService = new TMap.service.Suggestion({
          pageSize: 10,
          regionFix: false, // 自动扩大范围到全国匹配
        });
        // 地址解析服务
        this.geocoderService = new TMap.service.Geocoder()
      })
    },
    // 初始化地图
    initMap() {
        return new Promise((resolve) => {
        // 如果已加载直接返回
        if(typeof TMap !== "undefined") {
          // eslint-disable-next-line no-undef
          resolve(TMap);
          return true;
        }
        // 地图异步加载回调处理
        window.onMapCallback = function () {
          // eslint-disable-next-line no-undef
          resolve(TMap);
        };
  
        // 插入script脚本
        let TMap_URL = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key="+ this.mapKey +"&callback=onMapCallback";
        let scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", TMap_URL);
        document.body.appendChild(scriptNode);
      });
    },
    // 初始化标记点
    initMaker(latLng){
      this.marker =  new this.TMap.MultiMarker({
        map: this.map,
        styles: {
          // 点标记样式
          marker: new this.TMap.MarkerStyle({
            width: 20, // 样式宽
            height: 30, // 样式高
            anchor: { x: 10, y: 30 }, // 描点位置
          }),
        },
        geometries: [
          // 点标记数据数组
          {
            // 标记位置(纬度，经度，高度)
            position: latLng,
            id: 'centerMarker',
          },
        ],
      });
    },
    // 移动地图到中心点
    moveCenter(){
      var data = this.marker.getGeometryById('centerMarker');
       Object.assign(data, {
          position: this.center,
      });
      this.marker.updateGeometries([data]);
      this.nearPois = []
    },
    // 地图点击 更新地点
    mapClick(event){
      this.center = event.latLng

      this.geocoderService.getAddress({
        location: event.latLng
      }).then(res=>{
        this.detail.address = res.result.address
        this.detail.province = res.result.ad_info.province
        this.detail.city = res.result.ad_info.city
        this.detail.district = res.result.ad_info.district
        this.detail.adcode = res.result.ad_info.adcode
      })
      this.moveCenter()
    },
    
    // 通过关键词获得推荐位置
    getSuggestions() {
      if(!this.detail.address){
        this.nearPois =[]
        return 
      }
      this.suggestService.getSuggestions({ keyword: this.detail.address, location: this.map.getCenter() })
        .then((res) => {
          this.nearPois = res.data
        })
    },
    // 建议列表选择
    selectAddress(item) {
      this.center = item.location
      this.moveCenter()
      this.map.setCenter(item.location);

      this.detail.address = item.address
      this.detail.province = item.province
      this.detail.city = item.city
      this.detail.district = item.district
      this.detail.adcode = item.adcode
    },
    Select() {
      this.$emit('update:lng', this.center.lng)
      this.$emit('update:lat',this.center.lat)
      this.$emit('update:province',this.detail.province)
      this.$emit('update:city',this.detail.city)
      this.$emit('update:district',this.detail.district)
      this.$emit('update:adcode',this.detail.adcode)
      this.$emit('update:address',this.detail.address)
      this.$emit('change',{
        ...this.detail,
        ...this.center
      })
      this.dialogVisible = false
    }
  }
}
</script>
