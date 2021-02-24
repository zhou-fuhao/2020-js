import axios from "./axios";

// 获取部门信息列表
export function queryDepartmentList() {
    return axios.get('/department/list').then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 删除部门信息
export function deleteDepartment(params = {}) {
    return axios.get('/department/delete', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 新增部门信息
export function addDepartment(params = {}) {
    return axios.post('/department/add', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取部门信息
export function queryDepartmentInfo(params = {}) {
    return axios.get('/department/info', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 修改部门信息
export function updateDepartment(params = {}) {
    return axios.post('/department/update', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}