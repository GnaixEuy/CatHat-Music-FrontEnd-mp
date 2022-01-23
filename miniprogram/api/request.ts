const baseUrl = 'http://localhost:8080'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res) => {
        // handleHttpError(res,reject)
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

// const handleHttpError = (response, reject) =>{
//   if (reresponse.statusCode !== 200) {
//     reject('请求异常')
//   }
// }