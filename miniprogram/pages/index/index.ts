// index.ts

import { sayHello } from "../../api/hello"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    message: 'Hello World'
  },
  hi() {
    sayHello().then(data => {
      console.log(data);
      const message = data + ''
      this.setData({
        message
      })
    })
  }
})
