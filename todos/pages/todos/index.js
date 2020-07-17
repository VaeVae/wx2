// pages/todos/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文本框数据
    search:'',
    // 任务清单
    todos:[
      {
        name:'Learning HTML',
        completed:true
      },
      {
        name:'Learning CSS',
        completed:false
      },
      {
        name:'Learning JS',
        completed:false
      },
    ],
    // 任务清单完成情况数量
    leftCount:0,
    // 选中所有状态
    selectAll:false,
  },
  // 
  // 添加方法
  add(){
    // 1点击添加的时候获取input的值，
    // 2并将它添加到todos列表中
    // 3清空input框
    if(!this.data.search) return;
    let obj={
      completed:false,
      name:this.data.search
    }
  
    let list = [obj,...this.data.todos]
    this.setData({
      todos:list,
      search:'',
      leftCount:this.data.leftCount+1
    })

      // 或者写成 this.todos可以操作但是页面不会知道，所以需要setData来更新数据
    // this.data.todos.push(obj)
    // this.setData({
    //   todos:this.data.todos,
    //   search:''
    // })
  },
  // 监听输入框的改变
  inputChange(e){
    console.log(e,123)
    let inputValue = e.detail.value;
    this.setData({
      search:inputValue
    })
    if(e.type=='confirm'){
      this.add();
    }
  },
  // 点击切换选中的状态
  toggleCompleted(e){
    // 点击的item的下标
    let index = e.currentTarget.dataset.index;
    // 对应的item
    let item = this.data.todos[index];
    item.completed = !item.completed;
    // if(item.completed){
    //   this.setData({
    //     leftCount:this.data.leftCount+1
    //   })
    // }else{
    //   this.setData({
    //     leftCount:this.data.leftCount-1
    //   })
    // }
    this.setData({
        todos:this.data.todos,
        leftCount:this.data.leftCount + (item.completed?-1 : 1)
      })
  },
  // 点击删除
  clear(e){
    let index = e.currentTarget.dataset.index;
    let item = this.data.todos[index]
    let list = this.data.todos;
    list.splice(index,1);
    this.setData({
      todos:list,
      leftCount:this.data.leftCount - (item.completed ? 0 :1)
    })
  },
  // 选中所有
  toggleAll(){
    this.data.selectAll = !this.data.selectAll;
    let list = this.data.todos;
    list.map(item=>{
      item.completed = this.data.selectAll
    })
    this.setData({
      todos : list,
      leftCount:this.data.selectAll?0:list.length
    })
  },
  // 清空已经完成的人物
  clearCompleted(){
    let list = this.data.todos.filter(item=>{
      return !item.completed
    })
    this.setData({
      todos:list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list=this.data.todos.filter(i=>!i.completed)
    this.setData({
      leftCount:list.length
    })
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