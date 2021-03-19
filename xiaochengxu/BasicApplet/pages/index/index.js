// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    name: "小周同学",
    className: "queryClass",
    personList: [{
      id: 1,
      name: "张三",
      age: 20
    }, {
      id: 2,
      name: "李四",
      age: 22
    }],
    language: "chinese"
  },
  fn(e) {
    // 参数名用大小写
    console.log(e.mark.myData);
    // 参数名不用大小写
    console.log(e.target.dataset.mydata);
    this.setData({
      name: "我是小周同学呀。"
    });
  },
  fn1(e) {
    console.log(e.currentTarget.dataset.mydata);
    this.setData({
      language: e.currentTarget.dataset.mydata
    });
  }
})