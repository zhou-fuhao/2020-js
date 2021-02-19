import Vue from 'vue';
import VueX from 'vuex';
import logger from 'vuex/dist/logger';

// 如果在模块化构建系统中，确保在开头调用Vue.use(VueX);
Vue.use(VueX);

export default new VueX.Store({
    state: {
        title: '投票总人数',
        supperNum: 0,
        opposeNum: 0,
        // ratio: 0
    },
    getters: {
        ratio(state) {
            let sum = state.supperNum + state.opposeNum;
            let result = state.supperNum / sum * 100;
            if (sum == 0) {
                return 0;
            }
            return result.toFixed(2);
        }
    },
    mutations: {
        addSupper(state) {
            state.supperNum++;
        },
        addOppose(state) {
            state.opposeNum++;
        }
    },
    actions: {
        addSupper({
            commit
        }, payload) {
            commit('addSupper', payload);
        },
        addOppose({
            commit
        }, payload) {
            commit('addOppose', payload);
        }
    },
    // 可以在当前页面的控制台打印改变状态的日志
    plugins: [logger()]
});