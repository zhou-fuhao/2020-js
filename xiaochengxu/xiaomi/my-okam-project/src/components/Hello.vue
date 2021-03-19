<template>
    <view class="hello-wrap">
        <button plain class="hello-btn" @click="handleClick">Hello in {{from}}</button>
    </view>
</template>
<script>
export default {
    config: {
    },

    props: {
        from: String
    },

    components: {
    },

    data: {
    },

    methods: {
        handleClick() {
            this.$emit('hello', {from: this.from});
        }
    }
};
</script>
<style lang="scss">
.hello-wrap {
    margin: 20px;

    .hello-btn {
        border: none;
        padding: 30px;
        text-align: center;
        background: #fff;
        -quick-justify-content: center;
        -quick-align-items: center;
    }
}
</style>
