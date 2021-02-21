import axios from "./axios";

// 获取用户信息
export function queryUserList(params = {}) {
    return axios.get('/user/list', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取部门信息
export function queryDepartmentList() {
    return axios.get('/department/list').then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}