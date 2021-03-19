<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :loop="true" :autoplay="3000" indicator-color="#9e9e9e">
            <van-swipe-item v-for="(item) in bannerData" :key="item.id">
                <router-link :to="{path:`/detail/${item.id}`}">
                    <img :src="item.image" alt="">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    props: ["bannerData"],
    data() {
        return {};
    },
};
</script>
<style lang="less">
.my-swipe .van-swipe-item {
    color: #fff;
    height: 5rem;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.swiper {
    /deep/ .van-swipe__indicators {
        left: 80%;
    }
    // 改变小圆点的样式
    // .van-swipe__indicator {
    // background: blue;
    // width: .5rem;
    // height: .5rem;
    // border-radius: 1;
    // }
    // 改变滚动小圆点的样式
    .van-swipe__indicator--active {
        width: 0.5rem;
        border-radius: 0;
    }
}
</style>
