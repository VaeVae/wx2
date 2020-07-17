//app.js
// 调用App()方法传递一个对象参数，来创建小程序的实例

// 引入发送请求的方法
let requestData = require('./utils/request')

let obj={
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    request_base_url:"http://public/api",
    requeest_header:{
      'sign':'ELGgCEq/ewGcq74u/RpUCNrvovUxqM0Dr8H48DBeS/EkdAmOutG/0icB8PoSyxW/',
      'did':'12345dg',
      'apptype':'web',
      'X-Token':"14642de00877b9c539681b9ee821a0ab173df4b5"
    },
    request:requestData
  }
}
App(obj)