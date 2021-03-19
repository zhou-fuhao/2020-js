// components/com/com.js

// 1.组件的创建
// 根目录下创建components文件夹
// components文件夹下创建com文件夹
// com文件夹右键-->新建component-->填写com-->回车
// 2.组件的注册
// 在父组件的json文件中增加
// "usingComponents": {
//     "myCom":"../../components/com/com"
//   }
// 3.组件的使用
// 父组件直接使用cmd作为标签

Component({
  /**
   * 组件的属性列表
   * 接收父组件的参数
   * 类似vue中的props
   */
  properties: {
    data: {
      type: String,
      value: ""
    },
    age: {
      type: Number,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      console.log(this.data.data);

      // 小程序子组件触发父组件方法
      // this.triggerEvent('函数名', '参数');
      // vue子组件触发父组件方法
      // this.$emit('函数名', '参数')
      this.triggerEvent("childTap", "子组件触发父组件方法");
    }
  }
})