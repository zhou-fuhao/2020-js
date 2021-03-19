let express = require("express");
let app = express();
//中间件 次数不限制
app.get('/', function (req, res) {
    res.send('欢迎来到8088端口')
})
app.get('/api/xiaomi/swiper', function (req, res) {
    res.send({
        data: [{
            img: 'https://img.youpin.mi-img.com/daren/1c985c00dec21b842a6700af26883ced.jpg@base@tag=imgScale&h=320&w=750',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/daren/f85377b82e4d0ded4c65218c6144fc84.png@base@tag=imgScale&h=320&w=750',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/daren/13ea9bbe9bd86548ad43be1fc458395f.jpg@base@tag=imgScale&h=320&w=750',
            url: ''
        }]
    })
})
app.get('/api/xiaomi/nav', function (req, res) {
    res.send({
        data: [{
            img: 'https://img.youpin.mi-img.com/jianyu/efb5e1c094c3e185d2add3e49bee0366.png@base@tag=imgScale&h=100&m=1&q=80&w=100',
            text: '上新精选',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/jianyu/24c86a799f3ea8ccfa675ff7563d50fb.png@base@tag=imgScale&h=100&m=1&q=80&w=100',
            text: '小米众筹',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/jianyu/912d7d210a6a5771f5946f1a8ac39014.png@base@tag=imgScale&h=100&m=1&q=80&w=100',
            text: '有品秒杀',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/jianyu/8f0e4c5855e5c8dcb669e94e9a0549d9.png@base@tag=imgScale&h=100&m=1&q=80&w=100',
            text: '热销排行',
            url: ''
        }, {
            img: 'https://img.youpin.mi-img.com/jianyu/cac2205702a4acc7224b6f51308c0dd5.png@base@tag=imgScale&h=100&m=1&q=80&w=100',
            text: '小米自营',
            url: ''
        },]
    })
})
app.get('/api/xiaomi/productList', function (req, res) {
    res.send({
        data: [{
            name: '峰米抗光屏 88时',
            tag: '特价',
            des: '15mm超薄光学平板',
            price: '4999',
            oldPrice: '5999',
            id: '001',
            img: 'https://img.youpin.mi-img.com/shopmain/76b45f2eab1cb9cf0de116b9b2c41380.png@base@tag=imgScale&h=342&w=342'
        }, {
            name: '悦味雪平蒸锅套装',
            tag: '特价',
            des: '配备了单个蒸屉，随心烹饪',
            price: '79起',
            oldPrice: '99',
            id: '002',
            img: 'https://img.youpin.mi-img.com/shopmain/e24d79b1c824862434302a9f94a78e24.png@base@tag=imgScale&h=342&w=342'
        }, {
            name: '云米对开门566L',
            tag: '有品秒杀',
            des: '家中移动水吧|无霜锁水养鲜',
            price: '2699',
            oldPrice: '3699',
            id: '003',
            img: 'https://img.youpin.mi-img.com/shopmain/195fc44338500c28e7e51a52e6296d0c.png@base@tag=imgScale&h=342&w=342'
        }, {
            name: 'Switch配件',
            des: '无限连接，NFC连接',
            price: '99起',
            // oldPrice: '3699',
            id: '004',
            img: 'https://img.youpin.mi-img.com/shopmain/ab9263954d5915e35198948fdf515b01.png@base@tag=imgScale&h=342&w=342'
        },]
    })
})
app.get('/api/xiaomi/detail', function (req, res) {
    res.send({
        "data": [
            {
                "type": 1,
                "url": "https://video.youpin.mi-img.com/shopmain/3d93e153b91240ef71ac8818182b85a2.mp4"
            },
            {
                "type": 0,
                "url": "https://img.youpin.mi-img.com/shopmain/177cc4089ccd6d4739c8e2f7f06d72ab.jpg?w=1080&h=1080"
            },
            {
                "type": 0,
                "url": "https://img.youpin.mi-img.com/shopmain/70e27277c9544637025fb32bfaf982a5.jpg?w=1080&h=1080"
            },
            {
                "type": 0,
                "url": "https://img.youpin.mi-img.com/shopmain/8cc186904d8da17b5f162b1aeb769a7e.jpg?w=1080&h=1080"
            },
            {
                "type": 0,
                "url": "https://img.youpin.mi-img.com/shopmain/61ff1dfb5a7b7c553aa6b785cfe44e0b.jpg?w=1080&h=1080"
            },
            {
                "type": 0,
                "url": "https://img.youpin.mi-img.com/shopmain/9e1856f22991ce99b45c5da9a5104e70.jpg?w=1080&h=1080"
            }
        ],
        "services": {
            "2": {
                "type": null,
                "text": "满99包邮",
                "serviceStatus": "SUPPORT"
            },
            "6": {
                "type": null,
                "text": "三方店铺",
                "serviceStatus": "SUPPORT"
            },
            "7": {
                "type": null,
                "text": "支持7天无理由退货 (拆封后不支持)",
                "serviceStatus": "SUPPORT"
            },
            "13": {
                "type": null,
                "text": "售后免邮",
                "serviceStatus": "SUPPORT"
            }
        },
        "comment": {
            "index": {
                "avg_score": 5,
                "positive_rate": 97,
                "tags": [
                    {
                        "id": "__all__",
                        "name": "全部",
                        "count": 278,
                        "type": "__all__",
                        "category": "good"
                    },
                    {
                        "id": "__img__",
                        "name": "有图",
                        "count": 16,
                        "type": "__img__",
                        "category": "good"
                    },
                    {
                        "id": "__append__",
                        "name": "追评",
                        "count": 1,
                        "type": "__append__",
                        "category": "good"
                    },
                    {
                        "id": "__good__",
                        "name": "好评",
                        "count": 44,
                        "type": "__good__",
                        "category": "good"
                    },
                    {
                        "id": "d495994131258c6c7ec9293bf34d0bb8",
                        "name": "手感完美",
                        "count": 23,
                        "type": "d495994131258c6c7ec9293bf34d0bb8",
                        "category": "good"
                    },
                    {
                        "id": "9f034b7cc51b88d33bcb949b5cd655a8",
                        "name": "性价比可以",
                        "count": 8,
                        "type": "9f034b7cc51b88d33bcb949b5cd655a8",
                        "category": "good"
                    },
                    {
                        "id": "afb9f91955b90d37c530b1be8a13cb2b",
                        "name": "重量合适",
                        "count": 6,
                        "type": "afb9f91955b90d37c530b1be8a13cb2b",
                        "category": "good"
                    },
                    {
                        "id": "7bcc9385dac2abf3ad098033b2fb5821",
                        "name": "活动划算",
                        "count": 11,
                        "type": "7bcc9385dac2abf3ad098033b2fb5821",
                        "category": "good"
                    },
                    {
                        "id": "6188b708ddf05a72be74a05bb357ff65",
                        "name": "价格实惠",
                        "count": 4,
                        "type": "6188b708ddf05a72be74a05bb357ff65",
                        "category": "good"
                    },
                    {
                        "id": "067a8c3e2487c0f9e595f04dfe6ce834",
                        "name": "手感一流",
                        "count": 4,
                        "type": "067a8c3e2487c0f9e595f04dfe6ce834",
                        "category": "good"
                    },
                    {
                        "id": "d16df4a572ecf131a156380bf4c715f3",
                        "name": "重量适中",
                        "count": 1,
                        "type": "d16df4a572ecf131a156380bf4c715f3",
                        "category": "good"
                    },
                    {
                        "id": "920b10c252959675eb9977065ccc2910",
                        "name": "链接快",
                        "count": 2,
                        "type": "920b10c252959675eb9977065ccc2910",
                        "category": "good"
                    },
                    {
                        "id": "ef7bc5da221112376d9961c198834f9f",
                        "name": "质量很好",
                        "count": 1,
                        "type": "ef7bc5da221112376d9961c198834f9f",
                        "category": "good"
                    },
                    {
                        "id": "8b36d998447395c677f615a194e890dd",
                        "name": "链接顺畅",
                        "count": 2,
                        "type": "8b36d998447395c677f615a194e890dd",
                        "category": "good"
                    }
                ],
                "total_count": 278,
                "effective_count": 116
            },
            "content": [
                {
                    "pid": 98133,
                    "score": 5,
                    "comment_id": 32907963,
                    "ctime": 1612444817,
                    "text": "链接顺畅，重量合适，活动划算，链接快，手感一流，性价比可以，手感完美，价格实惠",
                    "txt": "链接顺畅，重量合适，活动划算，链接快，手感一流，性价比可以，手感完美，价格实惠",
                    "is_feature": false,
                    "_": 0,
                    "pid_name": "任天堂 Nintendo Switch 游戏机配件 游戏机手柄",
                    "pid_spec": "游戏机手柄",
                    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/98179238-78a1-4770-8f30-c101942fea44.jpg",
                    "nick_name": "1****56783",
                    "liked": false,
                    "like_count": 0
                },
                {
                    "pid": 98133,
                    "score": 5,
                    "comment_id": 29867626,
                    "ctime": 1610330603,
                    "text": "性价比不错，一分钱一分货，谁用谁知道啊",
                    "txt": "性价比不错，一分钱一分货，谁用谁知道啊",
                    "is_feature": false,
                    "_": 0,
                    "pid_name": "任天堂 Nintendo Switch 游戏机配件 游戏机手柄",
                    "pid_spec": "游戏机手柄",
                    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/41dbd6c1-8cf4-4e18-8cda-42e3c54fe88d.jpg",
                    "nick_name": "马*?",
                    "liked": false,
                    "like_count": 0
                },
                {
                    "pid": 98133,
                    "score": 5,
                    "comment_id": 27497470,
                    "ctime": 1608534107,
                    "text": "手感好，链接快，手感完美",
                    "txt": "手感好，链接快，手感完美",
                    "is_feature": false,
                    "_": 0,
                    "pid_name": "任天堂 Nintendo Switch 游戏机配件 游戏机手柄",
                    "pid_spec": "游戏机手柄",
                    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01djqV6aDI0/gekqjAfhL21LwP.jpg",
                    "nick_name": "a**e",
                    "liked": false,
                    "like_count": 0
                },
                {
                    "pid": 98133,
                    "score": 5,
                    "comment_id": 25713533,
                    "pics": [
                        "https://img.youpin.mi-img.com/comment/08ab8a9991614527e2ed6be3684a6f32.jpg?w=1080&h=1440",
                        "https://img.youpin.mi-img.com/comment/ae52d0f044670c8f2da50048a57bff59.jpg?w=1440&h=1080",
                        "https://img.youpin.mi-img.com/comment/5934c457bfba1ec1c343f1469fb32105.jpg?w=1080&h=1440",
                        "https://img.youpin.mi-img.com/comment/d4595d2fee0ebbb3911c2e597bdb84cc.jpg?w=1080&h=1440"
                    ],
                    "comment_imgs": [
                        {
                            "img": "https://img.youpin.mi-img.com/comment/08ab8a9991614527e2ed6be3684a6f32.jpg?w=1080&h=1440",
                            "thumbnail": "https://img.youpin.mi-img.com/comment/08ab8a9991614527e2ed6be3684a6f32.jpg@base@tag=imgScale&h=200&w=200"
                        },
                        {
                            "img": "https://img.youpin.mi-img.com/comment/ae52d0f044670c8f2da50048a57bff59.jpg?w=1440&h=1080",
                            "thumbnail": "https://img.youpin.mi-img.com/comment/ae52d0f044670c8f2da50048a57bff59.jpg@base@tag=imgScale&h=200&w=200"
                        },
                        {
                            "img": "https://img.youpin.mi-img.com/comment/5934c457bfba1ec1c343f1469fb32105.jpg?w=1080&h=1440",
                            "thumbnail": "https://img.youpin.mi-img.com/comment/5934c457bfba1ec1c343f1469fb32105.jpg@base@tag=imgScale&h=200&w=200"
                        },
                        {
                            "img": "https://img.youpin.mi-img.com/comment/d4595d2fee0ebbb3911c2e597bdb84cc.jpg?w=1080&h=1440",
                            "thumbnail": "https://img.youpin.mi-img.com/comment/d4595d2fee0ebbb3911c2e597bdb84cc.jpg@base@tag=imgScale&h=200&w=200"
                        }
                    ],
                    "ctime": 1607922101,
                    "text": "店家发货速度快，物流也很快，手柄很不错，价格也很实惠，确认是国行正品，好评！！！！",
                    "txt": "店家发货速度快，物流也很快，手柄很不错，价格也很实惠，确认是国行正品，好评！！！！",
                    "is_feature": false,
                    "_": 0,
                    "pid_name": "任天堂 Nintendo Switch 游戏机配件 游戏机手柄",
                    "pid_spec": "游戏机手柄",
                    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/825fb73e-a4c1-4432-b8c2-8c25246a9d6f.jpg",
                    "nick_name": "l***anhao",
                    "liked": false,
                    "like_count": 0
                },
                {
                    "pid": 98133,
                    "score": 5,
                    "comment_id": 27586344,
                    "ctime": 1608628984,
                    "text": "正版行货，手感不错，物有所值。",
                    "txt": "正版行货，手感不错，物有所值。",
                    "is_feature": false,
                    "_": 0,
                    "pid_name": "任天堂 Nintendo Switch 游戏机配件 游戏机手柄",
                    "pid_spec": "游戏机手柄",
                    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/1ab8e4e2-fa6a-4dbb-95c4-921639f54b74.jpg",
                    "nick_name": "@**@",
                    "liked": false,
                    "like_count": 0
                }
            ],
            "__debug": {
                "pids": [
                    98133,
                    100376,
                    100377,
                    100378,
                    100379,
                    100380,
                    100381
                ],
                "product_id": 0,
                "data_source": "direct"
            },
            "bigdata_meta": {
                "trace_kv": "requestId=59d228a976f04a48af72adf67229139d&bucket=conversionLong&pids=98133,100376,100377,100378,100379,100380,100381&tag_ids=__all__&comment_count=116&gid=117383"
            }
        },
        "info": {
            name:'任天堂 Nintendo Switch 游戏机配件',
            des: '内置锂电池，40小时超长续航，无线游玩，近距离无线连接',
            price: '99起'
        }
    })
})
app.get('/api/xiaomi/menu', function (req, res) {
    res.send({
        "code": 0,
        "data": [
            {
                "name": "有品推荐",
                "sort": -9223372036854775808,
                "id": "5fe309e096ee9288ed504dd1",
                "type": 2
            },
            {
                "name": "智能家庭",
                "sort": 1610956740346,
                "id": "600538f8cff47e0001a6ba33",
                "type": 0
            },
            {
                "name": "手机数码",
                "sort": 1610966459939,
                "id": "600538ebcff47e0001a6ba31",
                "type": 0
            },
            {
                "name": "家用电器",
                "sort": 1610968402826,
                "id": "600538efcff47e0001da16a8",
                "type": 0
            },
            {
                "name": "美食酒饮",
                "sort": 1610970165489,
                "id": "60053904cff47e0001da16aa",
                "type": 0
            },
            {
                "name": "家具家装",
                "sort": 1610970277900,
                "id": "60053912cff47e0001da16ac",
                "type": 0
            },
            {
                "name": "电脑办公",
                "sort": 1610972348033,
                "id": "60053918cff47e0001a6ba35",
                "type": 0
            },
            {
                "name": "出行车品",
                "sort": 1610974327561,
                "id": "6005391ecff47e0001da16ae",
                "type": 0
            },
            {
                "name": "服装配饰",
                "sort": 1610974593201,
                "id": "60053924cff47e0001da16b0",
                "type": 0
            },
            {
                "name": "运动户外",
                "sort": 1610976134593,
                "id": "60053933cff47e0001da16b6",
                "type": 0
            },
            {
                "name": "健康保健",
                "sort": 1610976631806,
                "id": "6005392ecff47e0001da16b4",
                "type": 0
            },
            {
                "name": "美妆个护",
                "sort": 1610977991957,
                "id": "60053929cff47e0001da16b2",
                "type": 0
            },
            {
                "name": "日用文创",
                "sort": 1610978565594,
                "id": "60053938cff47e0001da16b8",
                "type": 0
            },
            {
                "name": "家纺餐厨",
                "sort": 1610980546819,
                "id": "6005394ccff47e0001da16be",
                "type": 0
            },
            {
                "name": "鞋靴箱包",
                "sort": 1610988327888,
                "id": "6005393dcff47e0001da16ba",
                "type": 0
            },
            {
                "name": "母婴亲子",
                "sort": 1610989204512,
                "id": "60053942cff47e0001da16bc",
                "type": 0
            },
            {
                "name": "宠物生活",
                "sort": 1610991405161,
                "id": "60053955cff47e0001da16c0",
                "type": 0
            },
            {
                "name": "有品海购",
                "sort": 1610992847920,
                "id": "6005395bcff47e0001da16c2",
                "type": 0
            },
            {
                "name": "DLAB",
                "sort": 1610992901256,
                "id": "60053960cff47e0001a6ba37",
                "type": 0
            },
            {
                "name": "品牌墙",
                "sort": 9223372036854775807,
                "id": "5fe309e396ee9288ed504dd3",
                "type": 1
            }
        ],
        "message": "ok"
    })
})
app.get('/api/xiaomi/menuDetail', function (req, res) {
    let obj2 = {
        "code": 0,
        "data": {
            "children": [
                {
                    "displayType": 0,
                    "children": [
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a34cff47e0001a6ba4d",
                            "sort": 1610968453246,
                            "id": "6005445ecff47e0001a6bb32",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/b47564335f1fd6d6eda3e5d6d0cc63f6.png",
                                "name": "执手款"
                            },
                            "queryId": "906b44274c393766fc52284829cf87a1"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a34cff47e0001a6ba4d",
                            "sort": 1610968466627,
                            "id": "60054466cff47e0001da17bc",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/13a44a7d739053d98237d36f9aee2b12.png?w=800&h=800",
                                "name": "推拉款"
                            },
                            "queryId": "cea1aab6500a7e0e203e821eb96f092a"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a34cff47e0001a6ba4d",
                            "sort": 1610968479371,
                            "id": "6005446fcff47e0001a6bb34",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/7b397767ea5d2b5e87184f06aee041b7.png?w=800&h=800",
                                "name": "其他锁类"
                            },
                            "queryId": "0ac8593aeda5e72cf5dbbeab962a4b33"
                        }
                    ],
                    "name": "智能门锁",
                    "sort": 1610968411967,
                    "id": "60053a34cff47e0001a6ba4d",
                    "type": 0
                },
                {
                    "displayType": 0,
                    "children": [
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a3ecff47e0001da16cc",
                            "sort": 1610968503914,
                            "id": "6005447bcff47e0001da17be",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/5e359f025432f5dd4b6ba4c27c30241d.png?w=800&h=800",
                                "name": "智能门铃"
                            },
                            "queryId": "54a45e5887d66db74ef8128aa4dd9c40"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a3ecff47e0001da16cc",
                            "sort": 1610968542179,
                            "id": "60054481cff47e0001a6bb36",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/1cbfad8095e47a8a0cc452a481b30f8b.png?w=800&h=800",
                                "name": "智能猫眼"
                            },
                            "queryId": "12784f284e49bfe9e01be0e21329a371"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a3ecff47e0001da16cc",
                            "sort": 1610968566961,
                            "id": "60054486cff47e0001a6bb38",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/c62a570aa3c388812127bbdf0ecee278.png",
                                "name": "保险箱"
                            },
                            "queryId": "e543a8f6d56625f94e5562ea019e4c1f"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a3ecff47e0001da16cc",
                            "sort": 1610968591587,
                            "id": "6005448acff47e0001da17c0",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/54cae25959acb10c3165b58720377d23.png",
                                "name": "摄像机"
                            },
                            "queryId": "3f4fcc5221cf08bc6e45129ab3f2ecf2"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a3ecff47e0001da16cc",
                            "sort": 1610968605958,
                            "id": "6005448ecff47e0001da17c2",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/927557f2a54377017b0f1d16c9595edf.png",
                                "name": "报警器"
                            },
                            "queryId": "1a50760c22afdd5096ea88ac6e9885c5"
                        }
                    ],
                    "name": "智能安防",
                    "sort": 1610968415543,
                    "id": "60053a3ecff47e0001da16cc",
                    "type": 0
                },
                {
                    "displayType": 0,
                    "children": [
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968628100,
                            "id": "60054496cff47e0001da17c4",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/fc25fd88646586174f9ffded7b96ba95.png",
                                "name": "家庭套装"
                            },
                            "queryId": "97cf58a4f040210919b03376927ddf38"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968645829,
                            "id": "6005449dcff47e0001a6bb3a",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/27388984c42e8f36b9f772ea979c361d.png?w=800&h=800",
                                "name": "窗帘电机"
                            },
                            "queryId": "5a1cb2378f61d6f0c4a84b14a4a56853"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968666735,
                            "id": "600544a1cff47e0001a6bb3c",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/0c0be8e1a4adf629127511dbd7aced46.png",
                                "name": "开关"
                            },
                            "queryId": "d79a451bd57a4519df81c979cd7fc558"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968682961,
                            "id": "600544a6cff47e0001a6bb3e",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/0255c2296dfb7abebad876ee8f639424.png",
                                "name": "空调伴侣"
                            },
                            "queryId": "22ba2acf31377c23dbb4ded4992334c7"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968701275,
                            "id": "600544accff47e0001da17c6",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/3f52debf94037bde254543c5236a9555.png",
                                "name": "插座"
                            },
                            "queryId": "8ce183d0483bd9893dc73bd420f511f9"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "query": [
                                {
                                    "rule": [
                                        {
                                            "whiteGids": {
                                                "gids": [
                                                    105741,
                                                    104350,
                                                    103292,
                                                    117249
                                                ]
                                            }
                                        }
                                    ],
                                    "queryType": 1
                                }
                            ],
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968717902,
                            "id": "600544b1cff47e0001a6bb40",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/888ed6359fd539cf07299d3ef9cc91f4.png",
                                "name": "网关"
                            },
                            "queryId": "2e5c7fb0adc69affe667ffb975e576b5"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968741632,
                            "id": "600544b5cff47e0001da17c8",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/3b2c1c538eaae012c03d3d58d8e5a27a.png",
                                "name": "传感器"
                            },
                            "queryId": "b8df9a1d65dc544abcd71e99a22a26b1"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968757477,
                            "id": "600544b9cff47e0001da17ca",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/ba1ab28144a18714d4218f1b7a51a0f4.png",
                                "name": "检测仪"
                            },
                            "queryId": "650b8042ed96676694b8ae9f63e23ac9"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60053a45cff47e0001da16ce",
                            "sort": 1610968773254,
                            "id": "600544c1cff47e0001da17cc",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/72b17351baf876ef14466125896ff143.png",
                                "name": "远程遥控"
                            },
                            "queryId": "5d7f66fe58676fceb11912aba19de7e6"
                        }
                    ],
                    "name": "智能家居",
                    "sort": 1610968417913,
                    "id": "60053a45cff47e0001da16ce",
                    "type": 0
                }
            ],
            "bannerUrl": "https://m.xiaomiyoupin.com/w/universal?_rt=weex&pageid=5442&sign=7c94706566bede9355958ff18930baeb&pdl=jianyu",
            "name": "智能家庭",
            "banner": "https://img.youpin.mi-img.com/ferriswheel/j2fmp0c3tu_1694556501610968394302.jpg?w=786&h=228",
            "sort": 1610956740346,
            "id": "600538f8cff47e0001a6ba33",
            "type": 0
        },
        "message": "ok"
    };
    let obj1={
        "code": 0,
        "data": {
            "bannerList": [
                {
                    "bannerUrl": "https://m.xiaomiyoupin.com/w/universal?_rt=weex&pageid=5552&sign=996fda413488a2688b0492daeba42cb5&pdl=jianyu",
                    "banner": "https://img.youpin.mi-img.com/ferriswheel/ajrt185bf7g_21988919591613892021108.png?w=786&h=228",
                    "startTime": 1613700060000,
                    "endTime": 1614182399000
                }
            ],
            "children": [
                {
                    "displayType": 0,
                    "children": [
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1610997511574,
                            "id": "6005df07cff47e0001da1d95",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/643cba4a15984e1b290ba5bad2752264.png?w=800&h=800",
                                "name": "智能手环"
                            },
                            "queryId": "2db767dcaffcaf459aa0e95ba6a9ca80"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1610997539708,
                            "id": "6005df23cff47e0001a6c0e9",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/dd46827c86363a19ee0981dfc05834db.png?w=800&h=800",
                                "name": "真无线"
                            },
                            "queryId": "824074d49289fbccb4fe9327ef8c806c"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1610997552634,
                            "id": "6005df30cff47e0001a6c0eb",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/92241d528f0a9b18b4a68e032451c5c8.png",
                                "name": "全面屏"
                            },
                            "queryId": "32d9d9b5119d668e48461c8baae2cee1"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1610997615874,
                            "id": "6005df6fcff47e0001da1d97",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/8fe63dadcf8272e247eb63cf39a524f8.png?w=800&h=800",
                                "name": "吸顶灯"
                            },
                            "queryId": "949fa8ce36ac4543d3b805087547b9ab"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1611027580322,
                            "id": "6005df63cff47e0001a6c0ed",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/98e2df7cf9cae770161dc3bbf5b67db3.png",
                                "name": "即热饮水机"
                            },
                            "queryId": "64a588972654811499f0d2edfa2cb891"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "5fe309e096ee9288ed504dd2",
                            "sort": 1612435446979,
                            "id": "6005df7ccff47e0001a6c0ef",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/800_pic/05378de2e31037e2ead4403dc5fd7137.png",
                                "name": "轻薄本"
                            },
                            "queryId": "e3ad69017bb1a72202c0c491039bd991"
                        }
                    ],
                    "name": "为你推荐",
                    "id": "5fe309e096ee9288ed504dd2",
                    "type": 2
                },
                {
                    "displayType": 0,
                    "children": [
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611109928622,
                            "id": "6007938fcff47e000171dd37",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/5adcd2208a447112837d82322b5bec28.png?w=800&h=800",
                                "name": "回购榜单"
                            },
                            "queryId": "a3396367f0057a29e728338ba3f51f98"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611110118988,
                            "id": "6007939acff47e00012500d8",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/d14523feed731ba60943c8aaf89f7e3b.png?w=800&h=800",
                                "name": "暖冬必备"
                            },
                            "queryId": "de21faea0e970c1c61e159e67299c19c"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611110271975,
                            "id": "600793a2cff47e000171dd39",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/96f7bd6473ffcf78933fe88a283def17.png?w=800&h=800",
                                "name": "生活电器"
                            },
                            "queryId": "b2d7ae9ab01113c7751257233cb190f4"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611110301891,
                            "id": "600793a8cff47e00012500da",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/a242b4b0cbff47f54da55c0f30b51154.png?w=800&h=800",
                                "name": "全球健康"
                            },
                            "queryId": "cb8ebc26cf3713df7e4ba2cfc06a490c"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611110429465,
                            "id": "600793b3cff47e00012500dc",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/c0119c621cfd08d14bd47d6254f5af41.png?w=800&h=800",
                                "name": "厨卫家装"
                            },
                            "queryId": "d8b4a8740d83c4c788c881f2341b3667"
                        },
                        {
                            "jumpType": 1,
                            "displayType": 0,
                            "pid": "60058502cff47e0001a6bef0",
                            "sort": 1611110467562,
                            "id": "600793bbcff47e00012500de",
                            "smallImgCard": {
                                "img": "https://img.youpin.mi-img.com/shopmain/8eba62d4c0ee8d532395bfb725921d5f.png?w=800&h=800",
                                "name": "佳节好礼"
                            },
                            "queryId": "cdc00dbd949ae93fd81b49a5f484719a"
                        }
                    ],
                    "name": "精选专区",
                    "id": "60058502cff47e0001a6bef0",
                    "type": 0
                }
            ],
            "name": "有品推荐",
            "bannerUrl": "https://m.xiaomiyoupin.com/w/universal?_rt=weex&pageid=5105&sign=693f135adc720f2e2a6cff3d9fdfee01&pdl=jianyu",
            "banner": "https://img.youpin.mi-img.com/ferriswheel/3dcak7t0ed_1694556501610994623758.jpg?w=786&h=228",
            "id": "5fe309e096ee9288ed504dd1",
            "type": 2
        },
        "message": "ok"
    };
    let id = req.url.split('?id=')[1] || '';
    if (id === '600538f8cff47e0001a6ba33') {
        res.send(obj2);
    } else {
        res.send(obj1);
    }
})
app.listen('8088', function (params) {
    console.log("8088端口")
})
