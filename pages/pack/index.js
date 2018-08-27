const app = getApp()

Page({
  data: {
    userInfo: '',
    current: 'homepage'
  },
  onLoad: function () {
    // get user
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }
  },
  handleChange ({ detail }) {
    this.setData({
      current: detail.key
    })
  }
})