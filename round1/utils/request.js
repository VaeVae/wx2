// 请求数据的方法
let requestData=({url,method,data})=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: "...public/api"+url,
      method:method,
      data:data,
      header:{
        'sign':'ELGgCEq/ewGcq74u/RpUCNrvovUxqM0Dr8H48DBeS/EkdAmOutG/0icB8PoSyxW/',
        'did':'12345dg',
        'apptype':'web',
        'X-Token':"14642de00877b9c539681b9ee821a0ab173df4b5"
      },
      success(res){
        resolve(res.data)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

module.exports={
  requestData
}