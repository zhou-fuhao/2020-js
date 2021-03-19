import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";

import * as types from "./store-types";

import {
    queryUserList
} from "../api/user";
import {
    queryDepartmentList
} from "../api/department";
import {
    queryJobList
} from "../api/job";

import {
    queryCustomerList
} from "../api/customer";

import {
    queryVisitList
} from "../api/visit";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {},
    // 公共状态
    state: {
        // 当前登录者的权限
        power: '',
        userList: [],
        departmentList: [],
        jobList: [],
        customerList: [],
        visitList: []
    },
    mutations: {
        [types.CHANGE_POWER](state, payload = '') {
            state.power = payload;
        },
        // 获取用户信息列表信息
        [types.USER_LIST](state, userList) {
            state.userList = userList;
        },
        // 获取部门信息列表信息
        [types.DEPARTMENT_LIST](state, departmentList) {
            state.departmentList = departmentList;
        },
        // 获取职务信息列表信息
        [types.JOB_LIST](state, jobList) {
            state.jobList = jobList;
        },
        // 获取客户信息列表信息
        [types.CUSTOMER_LIST](state, customerList) {
            state.customerList = customerList;
        },
        // 获取回访信息列表信息
        [types.VISIT_LIST](state, visitList) {
            state.visitList = visitList;
        },

    },
    actions: {
        // 异步获取用户列表信息
        [types.USER_LIST](context, params = {}) {
            queryUserList(params).then(userList => {
                context.commit(types.USER_LIST, userList);
            });
        },
        // 异步获取部门列表信息
        [types.DEPARTMENT_LIST](context) {
            queryDepartmentList().then(departmentList => {
                context.commit(types.DEPARTMENT_LIST, departmentList);
            });
        },
        // 异步获取部门列表信息
        [types.JOB_LIST](context) {
            queryJobList().then(jobList => {
                context.commit(types.JOB_LIST, jobList);
            });
        },
        // 异步获取客户列表信息
        [types.CUSTOMER_LIST](context, params = {}) {
            queryCustomerList(params).then(customerList => {
                context.commit(types.CUSTOMER_LIST, customerList);
            });
        },
        // 异步获取回访列表信息
        [types.VISIT_LIST](context, params = {}) {
            queryVisitList(params).then(visitList => {
                context.commit(types.VISIT_LIST, visitList);
            });
        },
    },
    plugins: [logger()]
});