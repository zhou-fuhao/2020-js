<template>
    <view class="proListBox">
        <view class="inner" v-for="(item,index) in data" :key="index">
            <image :src="item.img" alt="" />
            <view class="title">{{item.name}}</view>
            <view class="des">{{item.des}}</view>
            <view class="price">
                <text class="now">￥{{item.price}}</text>
                <text class="old">￥{{item.oldPrice}}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: ["data"],
};
</script>

<style lang="scss" scoped>
.proListBox {
    background-color: #f4f4f4;
    padding-top: 20px;
    .inner {
        display: inline-block;
        background-color: #fff;
        // margin: 8px;
        margin-left: calc((100% - (100% - 35px)) / 3);
        margin-bottom: 15px;
        vertical-align: top;
        width: calc((100% - 35px) / 2);
        image {
            width: 100%;
        }
        .title {
            font-size: 18px;
        }
        .des {
            color: gray;
            display: inline-block; //设置行内块属性
            white-space: nowrap; //强制不换行
            width: 100%; //固定盒子的宽度
            overflow: hidden; //超出部分隐藏
            text-overflow: ellipsis; //显示‘...’
        }
        .price {
            .now {
                color: red;
                font-size: 18px;
            }
            .old {
                margin-left: 6px;
                color: gray;
                text-decoration: line-through;
            }
        }
    }
}
</style>
