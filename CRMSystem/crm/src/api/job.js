import axios from "./axios";

// 获取职务信息列表
export function queryJobList() {
    return axios.get('/job/list').then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 删除职务信息
export function deleteJob(params = {}) {
    return axios.get('/job/delete', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 新增职务信息
export function addJob(params = {}) {
    return axios.post('/job/add', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取职务信息
export function queryJobInfo(params = {}) {
    return axios.get('/job/info', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result.data;
        }
        return Promise.reject(result.codeText);
    });
}

// 修改职务信息
export function updateJob(params = {}) {
    return axios.post('/job/update', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}