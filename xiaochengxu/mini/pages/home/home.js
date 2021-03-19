// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '小可爱',
        querySystemInfo: ''
    },
    queryInfo() {
        // 调用系统信息
        wx.getSystemInfo({
            success: (result) => {
                console.log(result);
                this.setData({
                    querySystemInfo: result
                });
            },
        })

    },
    querDialog() {
        // wx.showToast 没有按钮
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            editable: true,
            success(res) {
                console.log(res);
                // res.content输入框内容
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    queryImage() {
        console.log(1);
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                // const tempFilePaths = res.tempFilePaths
                console.log(res);
            }
        })
    },
    queryVideo() {
        wx.chooseVideo({
            // album：从相册选择视频；camera：使用相机拍摄视频
            sourceType: ['album', 'camera'],
            // 最长拍摄时间
            maxDuration: 60,
            // back：默认拉起后置摄像头；front：默认拉起前置摄像头
            camera: 'back',
            success(res) {
                console.log(res.tempFilePath)
            }
        })
    },
    onQuery() {
        wx.getStorage({
            key: 'key',
            success(res) {
                console.log(res)
            }
        })
        try {
            var value = wx.getStorageSync('key')
            if (value) {
                // Do something with return value
            }
        } catch (e) {
            // Do something when catch error
        }
    },
    onShezhi() {
        // 异步
        wx.setStorage({
            key: "user1",
            data: {
                id: 1,
                name: '张三'
            }
        })
        // 同步
        try {
            wx.setStorageSync('user2', {
                id: 2,
                name: '李四'
            })
        } catch (e) {}

    },
    onLongPress() {
        console.log('长按');
    },
    // 转发给朋友
    onShareAppMessage() {},
    // 转发到朋友圈
    onShareTimeline() {}
})