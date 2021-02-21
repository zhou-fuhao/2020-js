import axios from "./axios";

// 检测是否登录
export function checkLogin() {
    return axios.get('/user/login').then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取power权限
export function queryPower() {
    return axios.get('/user/power').then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取用户信息
export function queryUserInfo(params = {}) {
    return axios.get('/user/info', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 退出登录
export function userSignout(params = {}) {
    return axios.get('/user/signout').then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 修改或重置密码
export function changeUserPassword(params = {}) {
    return axios.post('/user/resetpassword', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}