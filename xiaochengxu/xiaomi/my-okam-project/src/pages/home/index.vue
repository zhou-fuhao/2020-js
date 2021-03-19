<template>
    <view class="home-wrap">
        <swiper autoplay indicator-dots interval="3000" circular>
            <swiper-item v-for="(item,i) in swiper" :key="i">
                <image :src='item.img' alt="" />
            </swiper-item>
        </swiper>

        <view class="nav">
            <view class="inner" v-for="(item,i) in nav" :key='i'>
                <image :src="item.img" alt="" mode="widthFix" />
                <match-media max-width='330'>
                    <text class="text little">{{item.text}}</text>
                    <!--    <text>小</text> -->
                </match-media>
                <match-media min-width='331' max-width='600'>
                    <text class="text big">{{item.text}}</text>
                    <!--  <text>大</text> -->
                </match-media>
            </view>
        </view>
        <pro-list :data="proList">
        </pro-list>
        <view class="bottom">
            —————更多商品，敬请期待！——————
        </view>
    </view>
</template>
<script>
import proList from "../../components/proList";
export default {
    config: {},

    components: {
        proList,
    },
    data: {
        swiper: null,
        nav: null,
        proList: [],
    },
    onLoad() {
        this.host = getApp().globalData.host;
        this.$api
            .request({
                url: this.host + "/api/xiaomi/swiper",
            })
            .then((res) => {
                this.swiper = res.data.data;
            });
        //请求导航
        this.$api
            .request({
                url: this.host + "/api/xiaomi/nav",
            })
            .then((res) => {
                this.nav = res.data.data;
            });
        this.getProData();
    },
    //用户上拉动嘴，触底触发
    onReachBottom() {
        this.getProData();
    },
    methods: {
        getProData() {
            //请求商品
            this.$api
                .request({
                    url: this.host + "/api/xiaomi/productList",
                })
                .then((res) => {
                    this.proList = this.proList.concat(res.data.data);
                });
        },
    },
};
</script>
<style lang="scss">
.home-wrap {
    swiper {
        height: 160px;
        image {
            width: 100vw;
            height: 160px;
        }
    }
    .nav {
        .inner {
            display: inline-block;
            vertical-align: top;
            width: calc(20% - 20px);
            text-align: center;
            padding: 10px;
            image {
                width: 100%;
            }
            /*  text{
                font-size: 10px;
            } */
            .big {
                font-size: 13px;
            }
            .little {
                font-size: 10px;
            }
        }
    }
    .bottom {
        padding-top: 50px;
        text-align: center;
    }
    /*   @media screen and(max-width:330px){
     .nav .inner text{
            font-size: 10px;
        }
    }
    @media screen and(min-width: 330px){
     .nav .inner  text{
            font-size: 13px;
        }
    } */
}
</style>
