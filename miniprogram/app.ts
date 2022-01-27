import { getToken } from "./utils/auth"

// app.ts
App<IAppOption>({
  globalData: {},
  onShow() {
    
    if (!getToken() ) {
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }
  },  
})
