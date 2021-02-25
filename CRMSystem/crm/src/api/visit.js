import axios from "./axios";

// 获取信息列表
export function queryVisitList(params = {}) {
    return axios.get('/visit/list', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 删除信息
export function deleteVisit(params = {}) {
    return axios.get('/visit/delete', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 新增职务信息
export function addVisit(params = {}) {
    return axios.post('/visit/add', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取信息
export function queryVisitInfo(params = {}) {
    return axios.get('/visit/info', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 修改信息
export function updateVisit(params = {}) {
    return axios.post('/visit/update', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}