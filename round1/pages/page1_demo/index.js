// pages/page1_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 按钮点击方法
  dianji(){
    // 点击进行一个交互 显示操作菜单
    // wx.showActionSheet({
    //   // 显示的项列表
    //   itemList: ['A', 'B', 'C'],
    //   // 点击其中任意一项的回调函数
    //   success (res) {
    //     // tapIndex 项的下标
    //     console.log(res.tapIndex)
    //   },
    //   // 
    //   fail (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    // 点击显示一个模态框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // 点击显示一个消息提示框
    wx.showToast({
      title: '成功',
      // icon只支持loading和success
      icon: 'loading',
      duration: 2000
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