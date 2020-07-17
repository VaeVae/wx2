// pages/useComponent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {
        name:'张三',
        age:12,
        selected:false,
        id:1,
      },
      {
        name:'李四',
        age:13,
        selected:false,
        id:2
      },
      {
        name:'王五',
        age:11,
        selected:false,
        id:3
      },
      {
        name:'赵六',
        age:13,
        selected:false,
        id:4
      },
      {
        name:'田七',
        age:15,
        selected:false,
        id:5
      },
    ],
    checkedCount:0

  },

  // 接收子组件传来的值
  recCount(e){
    // 子组件传来的值在 e.detail中
    this.setData({
      checkedCount:e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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