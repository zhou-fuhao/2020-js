import axios from "./axios";

// 获取用户列表信息
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


// 删除用户信息
export function deleteUser(params = {}) {
    return axios.get('/user/delete', {
        params
    }).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 新增用户信息
export function addUser(params = {}) {
    return axios.post('/user/add', params).then(result => {
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

// 修改用户信息
export function updateUser(params = {}) {
    return axios.post('/user/update', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 重置密码
export function resetUserPassword(params = {}) {
    return axios.post('/user/resetpassword', params).then(result => {
        if (result.code == 0) {
            return result;
        }
        return Promise.reject(result.codeText);
    });
}

// 获取部门下拉列表和 职务下拉列表
export function querySelect() {
    let depList = axios.get('/department/list'),
        jobList = axios.get('/job/list');
    let depSelect = [],
        jobSelect = [];

    return axios.all([depList, jobList]).then(result => {
        let [depListRes, jobListRes] = result;
        if (depListRes.code == 0 && jobListRes.code == 0) {

            depListRes.data.forEach(item => {
                depSelect.push({
                    departmentId: item.id,
                    departmentName: item.name
                });
            });

            jobListRes.data.forEach(item => {
                jobSelect.push({
                    jobId: item.id,
                    jobName: item.name
                });
            });

            return [depSelect, jobSelect];
        }
        return Promise.reject([depSelect, jobSelect]);
    });
}