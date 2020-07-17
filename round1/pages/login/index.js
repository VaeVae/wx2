// pages/login/index.js
import Toast from '@vant/weapp/toast/toast';
import Notify from '@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'username':'测试',
    'password':'123456',
    'vcode':'',
    'verify_image':'',
    'verify_key':'',
    'verify_code':'',
    'pw_icon_close':'closed-eye',
    'hidepassword':true
  },
  getCode(){
    const app=getApp();
    let that=this;
    wx.request({
      url: app.globalData.request_base_url+'/login/getvcode',
      data:{},
      method:"post" ,
      header:app.globalData.requeest_header,
        success(res){
          let img=res.data.data.verify_image;
          img=img.replace(/[\r\n]/g,"")
          that.setData({
            verify_image:img,
            verify_code:res.data.data.verify_code,
            verify_key:res.data.data.verify_key
          })
        },
        fail: function (res){
        }
    })
  },
  showPwd(){
    let that=this;
    this.setData({
      hidepassword:!that.data.hidepassword
    })
    let icon='';
    this.data.hidepassword?icon="closed-eye":icon="eye-o";
    this.setData({
      pw_icon_close:icon
    })
  },
   login_submit(){
    let params={
      password:this.data.password,
      username:this.data.username,
      vcode:this.data.vcode,
      verify_key:this.data.verify_key
    }
    const {request}=getApp().globalData;
    Toast.loading({
      mask: true,
      message: '登录中...',
      duration:0
    });
    request({
      url:'/login/index',
      method:'post',
      data:params
    }).then(res=>{
      Toast.clear()
      if(res.error_code !== 200){
        this.getCode();
        return Notify({
                    type: 'danger',
                    message: res.message
                  })
      }
      wx.setStorageSync('userInfo', res.data);        
      wx.setStorageSync('token', res.data.token);        
      Notify({
        type: 'success',
        message: '登录成功！'
      })
      wx.reLaunch({
        url:'/pages/home/index',
      })

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCode();
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