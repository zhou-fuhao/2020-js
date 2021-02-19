import axios from "./axios";

// 用户登录
export function userLogin(params = {}) {
    return axios.post('/user/login', {
        // account=xxx&password=xxx
        ...params
    });
}

// 检测是否登录
export function login(params = {}) {
    return axios.get('/user/login', {
        params: {
            ...params
        }
    });
}

// 退出登录
export function signout(params = {}) {
    return axios.get('/user/signout', {
        params: {
            ...params
        }
    });
}