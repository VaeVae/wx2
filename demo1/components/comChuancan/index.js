// components/comChuancan/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  ready(){
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击选中
    handleSelect(e){
      console.log(e,'1232143')
      let index = e.currentTarget.dataset.index
      let item = this.data.list[index];
      item.selected = !item.selected;
      this.setData({
        list:this.data.list
      })
      this.countSelect();
    },
    // 统计list中的选中的个数
    countSelect(){
      let arr = this.data.list.filter(item=>{
        return item.selected
      })
      this.triggerEvent('recCount',arr.length)
    },

  }
})
