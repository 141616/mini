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
  dataFormat: function(time) {
    // const date = new Date(time)
    console.log(new Date(time).toLocaleDateString())
    return new Date(time).toLocaleDateString()
  }
})