// pages/demo2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  dianji(){
    // navigateBack默认返回到上一层
    wx.navigateBack({
      // delta返回的层数，delta过大会返回最开始的页面
      delta: 9,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,'086')
    // 当页面跳转到本页面时,可以通过 options 获取到跳转前的页面传来的值

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