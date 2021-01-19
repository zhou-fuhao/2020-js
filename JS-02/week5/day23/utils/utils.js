// 把字符串数据转为对象格式，并且把数据中state=1的数据过滤掉
function handledData(data) {
    data = JSON.parse(data);
    return data.filter(item => {
        return item.state == 0;
    });
}

// 对密码进行二次加密
function MD5Handled(value) {
    // 加密规则：删除前/后四位，在进行倒叙
    value = value.substring(4).split('').reverse().join('').substring(4);
    // value = value.substring(4).split('').reverse().join('').substring(4);
    return value;
}

// 根据当前登录的信息里的jobId去job.json数据里查询响应的power
function getJob(id, req) {
    let res = req.$JOBDATA.find(item => {
        return item.id == id;
    });
    return res;
}

// success(res, {power:'XXX',code:1});
function success(res, option) {
    res.status(200);
    res.send({
        code: 0,
        codeText: 'OK',
        ...option
    });
}

// 
function getDepartment(id, req) {
    let res = req.$DEPARTMENTDATA.find(item => {
        return item.id == id;
    });
    return res;
}

module.exports = {
    handledData,
    MD5Handled,
    getJob,
    success,
    getDepartment
}