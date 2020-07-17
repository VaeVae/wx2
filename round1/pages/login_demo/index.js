// pages/login_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"admin",
    password:"123456",
  },

  // 登录
  login(){
    console.log(this.data,'data')

  },
  submit(e){ 
    // 通过小程序的form可以拿到提交时的一些数据
    console.log(e.detail.value,'values')
  },
  // 输入内容发生变化时(原生html普通的写法)，这种方式更加清楚数据的流向，比上面的直接使用表单获取数据更清晰
  inputChange(e){
    this.setData({
      [e.target.dataset.type]:e.detail.value
    })
    // 等同于以下代码
  //   switch(e.target.dataset.type){
  //     case 'password':
  //       this.setData({
  //         password:e.detail.value
  //       })
  //       break;
  //     case 'username':
  //       this.setData({
  //         username:e.detail.value
  //       })
  //       break;
  //   }   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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