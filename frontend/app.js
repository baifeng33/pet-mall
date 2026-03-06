App({
  onLaunch() {
    // 检查登录状态
    this.checkLogin();
  },

  checkLogin() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }
  },

  globalData: {
    userInfo: null,
    token: '',
    baseURL: 'http://localhost:3000'
  }
});