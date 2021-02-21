import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {},
    // 公共状态
    state: {
        // 当前登录者的权限
        power: ''
    },
    mutations: {
        change_power(state, payload = '') {
            state.power = payload;
        }
    },
    actions: {
        
    },
    plugins: [logger()]
});