<template>
    <view class="menu-wrap">
        <van-sidebar :active-key="activeKey" @change="onChange">
            <van-sidebar-item v-for="(item, i) in menuList" :key="i" :title="item.name" />
        </van-sidebar>
        <view class="right">
            <image :src="menuDetail.banner" alt="" mode="widthFix" />
            <view class="proInner" v-for="(item, i) in menuDetail.children" :key="i">
                <view class="name">{{ item.name }} </view>
                <view class="pro" v-for="(pro, index) in item.children" :key="index">
                    <image :src="pro.smallImgCard.img" alt="" mode="widthFix" />
                    <view class="text">{{ pro.smallImgCard.name }}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
import vanSidebar from "../../../node_modules/@vant/weapp/dist/sidebar/index";
import vanSidebarItem from "../../../node_modules/@vant/weapp/dist/sidebar-item/index";
export default {
    //config:就是原生小程序的页面里的json文件，用来配置这个页面的界面表现得
    config: {
        title: "分类",
    },

    components: {
        vanSidebar,
        vanSidebarItem,
    },
    data: {
        activeKey: 0,
        menuList: null,
        menuDetail: null,
    },
    onLoad() {
        this.host = getApp().globalData.host;
        this.$api
            .request({
                url: this.host + "/api/xiaomi/menu",
            })
            .then((res) => {
                this.menuList = res.data.data;
                let id = this.menuList[this.activeKey].id;
                this.getMenuData(id);
            });
    },
    methods: {
        onChange(e) {
            console.log(e);
            let id = this.menuList[e.detail].id;
            this.getMenuData(id);
        },
        getMenuData(id) {
            this.$api
                .request({
                    url: this.host + "/api/xiaomi/menuDetail?id=" + id,
                })
                .then((res) => {
                    this.menuDetail = res.data.data;
                });
        },
    },
};
</script>
<style lang="scss">
.menu-wrap {
    .van-sidebar-item--selected {
        border: none;
        color: #fff;
        .van-sidebar-item__text {
            background: linear-gradient(
                to right,
                rgb(230, 170, 92),
                rgb(208, 139, 48)
            );
            border-radius: 9px;
            width: 100%;
        }
    }
    .van-sidebar-item {
        background-color: #fff;
        padding: 18px 8px 18px 4px;
        text-align: center;
    }
    .van-sidebar {
        position: fixed;
        height: 100vh;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .right {
        margin-left: 80px;
        background-color: #f4f4f4;
        padding: 10px;
        image {
            width: 100%;
            border-radius: 9px;
        }
        .proInner {
            width: 100%;
            display: inline-block;
            background-color: #fff;
            padding: 6px;
            border-radius: 9px;
            margin-top: 10px;
            .name {
                margin-bottom: 8px;
            }
            .pro {
                display: inline-block;
                vertical-align: top;
                width: 29%;
                text-align: center;
                margin-bottom: 8px;
                margin-right: 8px;
                .text {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
