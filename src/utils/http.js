function API_GET (url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      'content-type': 'application/json'
      // "token": token
    },
    success: function (res) {
      callBack(res.data)
    },
    fail: function (error) {
      console.log(error)
    }
  })
}
function API_POST (url, params, callBack) {
  wx.request({
    url: process.env.API_BASE_URL + url,
    method: 'POST',
    data: params || {},
    header: {
      'content-type': 'application/json',
      token: wx.getStorageSync('token') || ''
    },
    success: function (res) {
      callBack(res.data)
    },
    fail: function (error) {
      console.log(error)
    }
  })
}
module.exports = {
  API_GET,
  API_POST
}
