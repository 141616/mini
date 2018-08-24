// import { PACKAGES } from '../../mock'
const app = getApp()
const { PACKAGES } = require('../../mock/index')
Page({
  data: {
    userInfo: '',
    myPackages: []
  },
  onLoad: function () {
    // get user
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }
    // initPackages
    this.initPackages()
  },
  initPackages: function() {
    // MOCK DATA
    this.setData({
      myPackages: PACKAGES
    })
  },
  handleTap: function(e) {
    console.log(e.target)
    wx.navigateTo({ url: '../pack/index' })
  }
})