const bannerFocus = {
    template: `<div class="pagination">
                <span :class="{active:changeActive(i)}" v-for="(item,i) in total" @click="changeFocus(i)"></span>
            </div>`,
    props: ['total', 'index'],
    data() {
        return {

        }
    },
    methods: {
        changeActive(i) {
            let temp = this.index === this.total ? 0 : this.index;
            return i === temp;
        },
        // 切换跳转到点击的索引的图片
        changeFocus(i) {
            this.$emit('focus', i);
        }
    },
};

const bannerButton = {
    template: `<div>
                <a href="javascript:;" class="button-prev" @click="changeButtons('left')"></a>
                <a href="javascript:;" class="button-next" @click="changeButtons('right')"></a>
            </div>`,
    data() {
        return {

        }
    },
    methods: {
        changeButtons(type) {
            this.$emit('buttons', type);
        }
    },
};

const banner = {
    template: `<div class="container" @mouseover="autoTimer('up')" @mouseout="autoTimer('down')">
                <div class="wrapper" :style="sty" ref="wrapper">
                    <div class="slide" v-for='(item, index) in bannerList'>
                        <img :src="item.pic" alt="">
                    </div>
                </div>
                <banner-focus v-if="foucs" :total="bannerList.length-1" :index="activeIndex" @focus="handleFocus"></banner-focus>
                <banner-button v-if="button" @buttons="handleButtons"></banner-button>
            </div>`,
    props: {
        button: {
            type: Boolean,
            default: true
        },
        foucs: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            required: true
        },
        speed: {
            type: Number,
            default: 1000
        },
        interval: {
            type: Number,
            default: 2000
        },
        index: {
            type: Number,
            default: 0
        },
        init: {
            type: Function,
            default: Function.prototype
        },
        transitoned: {
            type: Function,
            default: Function.prototype
        }
    },
    data() {
        let bannerList = [...this.data, this.data[0]];
        let index = this.index;
        return {
            bannerList,
            sty: {
                left: -index * 1000 + 'px',
                transition: `left ${this.speed}ms linear`,
                width: bannerList.length * 1000 + 'px'
            },
            activeIndex: index
        }
    },
    methods: {
        // 循环轮播图片
        autoMove() {
            this.activeIndex++;

            if (this.activeIndex >= this.bannerList.length) {
                this.sty.left = '0px';
                this.sty.transition = `left 0ms linear`;
                this.activeIndex = 1;

                this.$nextTick(() => {
                    this.$refs.wrapper.offsetWidth;
                    this.sty.left = -this.activeIndex * 1000 + 'px';
                    this.sty.transition = `left ${this.speed}ms linear`;
                });
                return;
            }
            this.sty.left = -this.activeIndex * 1000 + 'px';
            this.sty.transition = `left ${this.speed}ms linear`;
        },
        // 鼠标滑上滑下事件
        autoTimer(type) {
            if (type == 'up') {
                clearInterval(this.timer);
            }
            if (type == 'down') {
                this.timer = setInterval(this.autoMove, this.interval);
            }
        },
        // 切换跳转到点击的索引的图片
        handleFocus(index) {
            this.activeIndex = index;
            this.sty.left = -this.activeIndex * 1000 + 'px';
            this.sty.transition = `left ${this.speed}ms linear`;
        },
        // 左右小耳朵
        handleButtons(type) {
            if (type == 'right') {
                this.autoMove();
                return;
            }
            if (type == 'left') {
                this.activeIndex--;

                if (this.activeIndex < 0) {
                    this.sty.transition = `left 0ms linear`;
                    this.sty.left = -(this.bannerList.length - 1) * 1000 + 'px';
                    this.activeIndex = this.bannerList.length - 2;

                    this.$nextTick(() => {
                        this.$refs.wrapper.offsetWidth;
                        this.sty.left = -this.activeIndex * 1000 + 'px';
                        this.sty.transition = `left ${this.speed}ms linear`;
                    });
                    return;
                }
                this.sty.left = -this.activeIndex * 1000 + 'px';
                this.sty.transition = `left ${this.speed}ms linear`;
            }
        }
    },
    mounted() {
        // 循环轮播图片
        this.timer = setInterval(this.autoMove, this.interval);

        this.init(this);
    },
    updated() {
        this.transitoned(this);
    },
    // 组件注册
    components: {
        bannerFocus,
        bannerButton
    }
};