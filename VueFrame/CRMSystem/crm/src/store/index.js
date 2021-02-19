import Vue from "vue";
import Vuex from "vuex";
import * as types from "./store-types";
import {
    ApiQueryPower
} from "../api/login";
import logger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {},
    state: {
        isLogin: false,
        power: ''
    },
    mutations: {
        [types.CHECK_IS_LOGIN](state, isLogin = true) {
            state.isLogin = isLogin;
        },
        [types.QUERY_POWER](state, power) {
            state.power = power;
        }
    },
    actions: {
        [types.QUERY_POWER](context) {
            ApiQueryPower.then(power => {
                context.commit(types.QUERY_POWER, power);
            });
        }
    },
    plugins: [logger()]
});