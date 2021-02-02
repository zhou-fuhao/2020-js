// =>左右切换按钮
const bannerButton = {
    template: `<div>
                    <a href="javascript:;" class="button-prev" @click="change('left')"></a>
                    <a href="javascript:;" class="button-next" @click="change('right')"></a>
                </div>`,
    props: ['handlebutton'],
    // props: ['handlebutton'],
    methods: {
        change(flag) {
            // this.$emit('handleButton',flag); // 可以不用定义props，直接获取事件池里的方法
            this.handlebutton(flag);
        }
    }
};
// =>分页器
const bannerFocus = {
    template: `<div class="pagination">
                <span :class="{active:activeHandle(i)}" v-for="(item,i) in arr" @click="change(i)"></span>
            </div>`,
    props: ['total', 'index'],
    data() {
        return {
            arr: new Array(this.total).fill(null)
        }
    },
    methods: {
        activeHandle(i) {
            // i 当前循环这一项的索引
            // this.index 当前展示slide的索引
            let temp = this.index === this.total ? 0 : this.index;
            return i === temp;
        },
        change(i) {
            this.$emit('foucs', i);
        }
    }
};
// =>轮播图组件
const banner = {
    template: `<div class="container" @mouseover="autoTimer('up')" @mouseout="autoTimer('down')">
                <div class="wrapper" :style="sty" ref="wrapper">
                    <div class="slide" v-for="(item,index) in bannerData" :key="index">
                        <img :src="item.pic" alt="">
                    </div>
                </div>
                <banner-focus v-if="foucs" :total="bannerData.length-1" :index="activeIndex"
                    @foucs="handleFoucs"></banner-focus>
                <banner-button v-if="button" :handlebutton="handleButton"></banner-button>
                </div>`,
    components: {
        bannerButton,
        bannerFocus
    },
    data() {
        // 把传递进来的数据第一张克隆一份放在末尾
        let bannerData = [...this.data, this.data[0]];
        // 默认图片显示的索引
        let index = this.index;
        return {
            bannerData,
            // 轮播图的核心就是不断的改变定时器的wrapper的left值
            // 1000是图片的宽度
            sty: {
                // 设置默认的显示哪张图片
                left: -index * 1000 + 'px',
                // 设置过度动画以及过度时间
                transition: `left ${this.speed} ms linear`,
                // 设置wrapper的总宽度
                width: bannerData.length * 1000 + 'px'
            },
            activeIndex: index
        }
    },
    // 传递属性的校验(当前轮播图组件支持的参数配置)
    props: {
        // 接收的是当前轮播图的数据
        data: {
            type: Array,
            required: true
        },
        // 控制左右小耳朵是否显示
        button: {
            type: Boolean,
            default: true
        },
        // 控制焦点是否显示
        foucs: {
            type: Boolean,
            default: true
        },
        // 控制图片的运行速度
        speed: {
            type: Number,
            default: 1000
        },
        // 控制轮播的速度(如果值为0则为不开启自动轮播)
        interval: {
            type: Number,
            default: 2000
        },
        // 初始图片的索引
        index: {
            type: Number,
            default: 0
        },
        // 轮播图组件初始化完成的回调函数
        init: {
            type: Function,
            default: Function.prototype
        },
        // 图片轮播的时候，每轮播完成一张就会触发回调函数
        transitoned: {
            type: Function,
            default: Function.prototype
        }
    },
    methods: {
        autoMove() {
            // 定时器每执行一次就让activeIndex加加一次
            this.activeIndex++;

            // 如果activeIndex>=4，说明已经运动到最后一张，这时应马上切换到第一张(因为第一张和最后一张一样)，还得把过度时间设置为0
            if (this.activeIndex >= this.bannerData.length) {
                this.sty.left = '0px';
                this.sty.transition = `left 0ms linear`;
                this.activeIndex = 1;

                // 回调函数会在本次修改数据之后，DOM试图重新渲染完成后执行
                this.$nextTick(() => {
                    // 由于vue内部的性能优化机制，在函数里多次改变this上的数据，最后只触发一次试图的更新
                    // 这句话是为了在浏览器渲染机制中渲染两次试图用的
                    this.$refs.wrapper.offsetWidth;
                    this.sty.left = -this.activeIndex * 1000 + 'px';
                    this.sty.transition = `left ${this.speed}ms linear`;
                });
                return;
            }
            // setTimeout(() => {
            // 由于vue内部的性能优化机制，在函数里多次改变this上的数据，最后只触发一次试图的更新
            this.sty.left = -this.activeIndex * 1000 + 'px';
            this.sty.transition = `left ${this.speed}ms linear`;
            // }, 1000);
        },
        autoTimer(type) {
            // 滑上图片清除轮播
            if (type == 'up') {
                clearInterval(this.timer);
            }
            // 离开图片开始轮播
            if (type == 'down') {
                this.timer = setInterval(this.autoMove, this.interval);
            }
        },
        handleButton(flag) {
            // 判断left  right
            if (flag == 'right') {
                this.autoMove();
                return;
            }
            if (flag == 'left') {
                // 如果当前的activeIndex<0，已经点击到第一张
                // 应该把图片迅速移动到最后一张(过度时间设置为0)
                // 移动完成把activeIndex改为倒数第二张图片的索引，然后在加上过度时间，把图片也切换到倒数第二张(改变left值)
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.sty.transition = `left 0ms linear`;
                    this.sty.left = -(this.bannerData.length - 1) * 1000 + 'px';
                    this.activeIndex = this.bannerData.length - 2;

                    this.$nextTick(() => {
                        this.$refs.wrapper.offsetWidth;
                        this.sty.left = -this.activeIndex * 1000 + 'px';
                        this.sty.transition = `left ${this.speed}ms linear`;
                    })
                    return;
                }
                this.sty.left = -this.activeIndex * 1000 + 'px';
                this.sty.transition = `left ${this.speed}ms linear`;
            }
        },
        handleFoucs(i) {
            this.activeIndex = i;
            this.sty.left = -this.activeIndex * 1000 + 'px';
            this.sty.transition = `left ${this.speed}ms linear`;
        }
    },
    // 生成一个定时器，不断的控制wrapper的left的值的变化，从而实现图片的切换
    mounted() {
        // 在这里启动定时器，当mounted执行的时候，页面DOM已经渲染完，此时开启定时器再去才做DOM的样式

        // 把定时器的返回值存储到当前this实例上，以后好获取
        this.timer = setInterval(this.autoMove, this.interval);
        // 触发init钩子函数执行
        this.init(this);
    },
    updated() {
        // 触发切换完的钩子函数执行
        this.transitoned(this);
    }
};