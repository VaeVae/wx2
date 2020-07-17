// pages/first/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      name:'张三',
      age:18
    },
    controlClass:'Name1',
    arr:[
      { name:'唐僧' , role:'师父' , hname:'玄奘' },
      { name:'孙悟空' , role:'大徒弟' , hname:'孙行者' },
      { name:'猪悟能' , role:'二徒弟' , hname:'猪八戒' },
      { name:'沙悟净' , role:'三徒弟' , hname:'沙和尚' },
      { name:'小白龙' , role:'坐骑' , hname:'西海三太子' },
    ],
    // 单向数据流
    msg:'delisious'
  },

  // 定义点击事件
  buttonTab(e){
    console.log(e,'12234234')
    console.dir(e)
  },
  // 冒泡
  innerFun(e){
    console.log(e,'inner')
  },
  outerFun(){
    console.log('outer')
  },
  // 事件传参函数/方法，不是事件
  shijianchuancan(e){
    console.log(e.target.dataset,'11111')
  },
// 单向数据流
inputHandle(e){
  console.log(e.detail.value,'1234')
  // this.setData用来改变data数据的，通知界面做出变化
  this.setData({
      msg:e.detail.value
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