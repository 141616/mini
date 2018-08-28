const app = getApp()

Page({
  data: {
    userInfo: '',
    current: 'homepage',
    kinds: ['技术类', '文学类', '数学类', '科学类', '文史类', '其他']
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