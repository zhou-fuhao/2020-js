<template>
    <view class="proListBox">
        <view class="inner" v-for="(item,i) in data" :key="i">
            <image :src="item.img" alt=""/>
            <view class="title">
                {{item.name}}
            </view>
             <view class="des">
                 {{item.des}}
            </view>
             <view class="price">
                 <text class="now">￥{{item.price}}</text>
                 <text class="old">￥{{item.oldPrice}}</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props:['data']
    }
</script>

<style lang="scss" scoped>
.proListBox{
   background-color: #f4f4f4;
   padding-top: 20px;
    .inner{
        display: inline-block;
        background-color: #fff;
        margin-bottom: 10px;
        margin-left: calc((100% - (100% - 35px))/3);
        border-radius: 9px;
        vertical-align: top;
        width:calc((100% - 35px)/2);
        image{
            width: 100%;
        }
        .title{
            font-size: 15px;
            color:#333;
        }
        .des{
            font-size: 12px;
            color:#999;
            //是否换行：不换行
            white-space:nowrap;
            //超出隐藏
            overflow:hidden;
            //文本隐藏的地方：省略号
            text-overflow:ellipsis;
        }
        .price{
            .now{
                font-size: 17px;
                color:red;
                margin-bottom: 0.42px;
                margin-left: 5px;
            }
            .old{
                text-decoration: line-through;
                margin-left: 3.4px;
                font-size: 14px;
                color:rgb(153, 153, 153);
            }
        
      }

    }
}
</style>