import axios from "./index";

// 登录接口
export function ApiOnLogin(account, password) {
    return axios.post('/user/login', {
        account,
        password
    }).then(result => {
        if (result.code == 0) {
            return result.power;
        }
        return Promise.reject(result.codeText);
    });
}

// 检测是否正常登录
export function ApiCheckLogin() {
    return axios.get('/user/login').then(result => {
        if (result.code == 0) {
            return true;
        }
        return Promise.reject(false);
    });
}

// 获取用户权限
export function ApiQueryPower() {
    return axios.get('/user/power').then(result => {
        if (result.code == 0) {
            return result.power;
        }
        return Promise.reject(result.codeText);
    });
}