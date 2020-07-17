// pages/home/index.js
Page({

  /**
   * 页面的初始数据，data为页面提供数据，界面与逻辑之间的桥梁
   */
  data: {
    active:'zonghe',
    // 地图详情的显示与隐藏
    showMakerDetail:false,
    // 当前显示详情信息
    currentMarkerInfo:{},
    plantData: [
      {
        marker_type: "待对接",
        marker_name: "开江县城市生活污水处理厂",
        chuli: "15000",
        county_name: "开江县",
        town_name: "新宁镇",
        money: "620",
        pipe_len: "35.52",
        year_cost: "250",
        service_nums: "25",
        address: "开江县新宁镇",
        longitude: "107.83553",
        latitude: "31.11442"
      },
      {
        marker_type: "待对接",
        marker_name: "通川区魏兴镇污水处理厂",
        chuli: "5000",
        county_name: "通川区",
        town_name: "魏兴镇",
        money: "600",
        pipe_len: "13.53",
        year_cost: "50",
        service_nums: "35",
        address: "通川区魏兴镇",
        longitude: "107.52795",
        latitude: "31.33085"
      },
      {
        marker_type: "待对接",
        marker_name: "大竹县益康生活污水处理厂扩建",
        chuli: "20000",
        county_name: "大竹县",
        town_name: "-",
        money: "600",
        pipe_len: "20",
        year_cost: "23",
        service_nums: "30",
        address: "大竹县",
        longitude: "107.227937",
        latitude: "30.771114"
      },
      {
        marker_type: "待对接",
        marker_name: "渠县临巴镇污水处理厂",
        chuli: "5000",
        county_name: "渠县",
        town_name: "临巴镇",
        address: "渠县临巴镇",
        money: "600",
        pipe_len: "20",
        year_cost: "23",
        service_nums: "30",
        longitude: "107.067505",
        latitude: "30.903317"
      },
      {
        marker_type: "待对接",
        marker_name: "开江县任市镇污水处理设施",
        chuli: "12000",
        county_name: "开江县",
        town_name: "任市镇",
        address: "开江县任市镇",
        money: "588",
        pipe_len: "54.02",
        year_cost: "50.54",
        service_nums: "30",
        longitude: "107.79609",
        latitude: "30.92172"
      },
      {
        marker_type: "待对接",
        marker_name: "宣汉县南坝镇污水处理设施",
        chuli: "10000",
        county_name: "宣汉县",
        town_name: "南坝镇",
        address: "宣汉县南坝镇",
        money: "645",
        pipe_len: "20",
        year_cost: "23",
        service_nums: "30",
        longitude: "107.99333",
        latitude: "31.36058"
      },
      {
        marker_type: "待对接",
        marker_name: "万源市白沙镇污水处理站",
        chuli: "5000",
        county_name: "万源市",
        town_name: "白沙镇",
        address: "万源市白沙镇",
        money: "500",
        pipe_len: "20",
        year_cost: "23",
        service_nums: "30",
        longitude: "108.134647",
        latitude: "31.981646"
      },
      {
        marker_type: "待对接",
        marker_name: "达川区河市镇污水处理厂",
        chuli: "5000",
        county_name: "达川区",
        town_name: "河市镇",
        address: "达川区河市镇",
        money: "450",
        pipe_len: "20",
        year_cost: "23",
        service_nums: "30",
        longitude: "107.462511",
        latitude: "31.130461"
      },
      {
        marker_type: "待对接",
        marker_name: "宣汉县双河镇污水处理设施",
        county_name: "宣汉县",
        town_name: "双河镇",
        address: "宣汉县双河镇",
        chuli: "7000",
        money: "542",
        pipe_len: "20",
        year_cost: "54",
        service_nums: "30",
        longitude: "107.794325",
        latitude: "31.507671"
      },
      {
        marker_type: "待对接",
        marker_name: "宣汉县土黄镇污水处理设施",
        chuli: "16000",
        county_name: "宣汉县",
        town_name: "土黄镇",
        address: "宣汉县土黄镇",
        money: "400",
        pipe_len: "20.4",
        year_cost: "23",
        service_nums: "40",
        longitude: "108.194241",
        latitude: "31.587709"
      },
      {
        marker_type: "待对接",
        marker_name: "宣汉县土主镇污水处理设施",
        chuli: "5000",
        county_name: "宣汉县",
        town_name: "土主镇",
        address: "宣汉县土主镇",
        money: "502",
        pipe_len: "40",
        year_cost: "20",
        service_nums: "30",
        longitude: "107.713839",
        latitude: "31.521082"
      }
    ],
    markers: [],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    this.setData({
      showMakerDetail:true,
      currentMarkerInfo:this.data.plantData[e.markerId]
    })
  },
  // 监听tabbar变化
  onChange(val){
    console.log(val,'121212')
    this.setData({active:val.detail})
  },
// 关闭marker详情弹窗
closeMarkerDetail(){
  this.setData({
    showMakerDetail:false
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx,'1212435467587')
    let token=wx.getStorageSync('token');
    if(!token){
      wx.reLaunch({
        url:'/pages/login/index',
      })
    }
    let arr=[];
    this.data.plantData.map((item,index)=>{
      console.log(item,'item')
      let info=item.marker_name+'\n'
     let obj = {
        iconPath: "../../resource/marker.png",
        id: index,
        latitude: item.latitude,
        longitude: item.longitude,
        width: 24,
        height: 36,
        callout:{
          color:'#06AB55',
          content:info,
          padding:8,
          borderRadius:6,
        }
      }
      arr.push(obj)
    })
    this.setData({markers:arr})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})