<template>
    <div class="button">
        <slot></slot>
    </div>
</template>
<script>
// 此组件用于快应用
export default {
    props: {
        plain: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default'
        },
        type: {
            type: String,
            default: 'default'
        }
    }
};
</script>
<style lang="scss">
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-size: 18px;
    border-radius: 5px;
    color: #000;
}
</style>


