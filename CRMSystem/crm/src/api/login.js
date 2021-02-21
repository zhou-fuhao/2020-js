import axios from "./axios";

// 登录接口
export function handleLogin(params = {}) {
    return axios.post('/user/login', params).then(result => {
        if (result.code == 0) {
            return result.power;
        }
        return Promise.reject(result.codeText);
    });
}
