// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 1, // 初始缩放比例
    minScale: 1, // 最小缩放比例
    maxScale: 5, // 最大缩放比例
    currentVideo: {
      src: 'cloud://my-cloudenv-6glu27bk60a08241.6d79-my-cloudenv-6glu27bk60a08241-1333614277/VideoSource/100个云南非遗故事丨泥人苏的瓦猫 - 1.100个云南非遗故事丨泥人苏的瓦猫(Av1755601833,P1).mp4', // 默认视频地址
      title: '100个云南非遗故事丨泥人苏的瓦猫' // 默认视频标题
    },
    videos: [
      { id: 1, title: '云南非遗寻迹丨竹篮打水不再空', src: 'cloud://my-cloudenv-6glu27bk60a08241.6d79-my-cloudenv-6glu27bk60a08241-1333614277/VideoSource/云南非遗寻迹丨竹篮打水不再空 - 1.云南非遗寻迹丨竹篮打水不再空(Av113026409694223,P1).mp4' },
      { id: 2, title: '一苦二甜三回味丨100个云南非遗故事', src: 'cloud://my-cloudenv-6glu27bk60a08241.6d79-my-cloudenv-6glu27bk60a08241-1333614277/VideoSource/一苦二甜三回味丨100个云南非遗故事 - 1.一苦二甜三回味丨100个云南非遗故事(Av113699645818753,P1).mp4' },
      { id: 3, title: '我的大航海时代丨100个云南非遗故事', src: 'cloud://my-cloudenv-6glu27bk60a08241.6d79-my-cloudenv-6glu27bk60a08241-1333614277/VideoSource/我的大航海时代丨100个云南非遗故事 - 1.我的大航海时代丨100个云南非遗故事(Av113339153845158,P1).mp4' },
      { id: 4, title: '100个云南非遗故事丨泥人苏的瓦猫', src: 'cloud://my-cloudenv-6glu27bk60a08241.6d79-my-cloudenv-6glu27bk60a08241-1333614277/VideoSource/100个云南非遗故事丨泥人苏的瓦猫 - 1.100个云南非遗故事丨泥人苏的瓦猫(Av1755601833,P1).mp4' },
      // 添加更多视频项
    ]
  },

  onLoad: function () {
    // 初始化时设置地图缩放比例
    this.setData({
      scale: this.data.minScale,
    });
  },

  // 手势操作来缩放和拖动地图
  onPinch: function (e) {
    const scale = e.detail.scale;
    if (scale >= this.data.minScale && scale <= this.data.maxScale) {
      this.setData({
        scale: scale
      });
    }
  },

  onTap: function (e) {
    // 处理点击事件，例如显示地图上的信息
    console.log("点击了地图位置", e);
  },

  onVideoSelect: function (e) {
    const { src, title } = e.currentTarget.dataset;
    this.setData({
      currentVideo: {
        src: src,
        title: title
      }
    });
  },

  // 视频分享
  onShareAppMessage: function () {
    return {
      title: '探索非遗之魅力！',
      path: '/pages/page/page',
      imageUrl: "/images/share.jpg"
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})