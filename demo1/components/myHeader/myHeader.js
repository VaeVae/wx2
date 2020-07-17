// components/myHeader/myHeader.js
Component({
  /**
   * 组件的属性列表（ 组件可以接收的属性 ）
   */
  properties: {
    innerText:{
      // 属性类型
      type:String,
      // 属性默认值
      value:'自定义组件的 default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 定义组件内部数据
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 组件自定义的一些方法
    // 子组件传参给父组件（通过方法传参）
  }
})
