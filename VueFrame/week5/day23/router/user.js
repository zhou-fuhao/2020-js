const e = require('express');
let express = require('express');

let route = express.Router();
let {
    MD5Handled,
    getJob,
    success,
    getDepartment
} = require('../utils/utils');

// 登录的接口
route.post('/login', (req, res) => {
    // 先拿到当前的请求体
    let {
        account = '',
            password = ''
    } = req.body;
    // 后台会对当前的密码进行二次加密
    password = MD5Handled(password);
    // console.log(password);

    // 校验当前的account和password在user.json有没有对应的信息
    // find也是遍历数组的方法，当回调函数执行的时候，如果返回的是true，整体遍历结束，把当前的item进行返回
    let result = req.$USERDATA.find(item => {
        return item.password === password && (item.name === account || item.phone === account || item.email === account);
    });
    // 登录成功之后的逻辑
    if (result) {
        // 获取当前登录者的power信息

        let power = (getJob(result.jobId, req) || {}).power || '';

        req.session.power = power;
        req.session.userId = result.id;

        success(res, {
            power
        });
    } else {
        // 登录失败之后的逻辑

        success(res, {
            code: 1,
            codeText: 'NO'
        });
    }
});

// 校验登录状态的接口
route.get('/login', (req, res) => {
    // 当前请求过来以后，判断当前的session里有没有对应的connect_sid
    // 使用接口的时候要注意，在登录成功之后才可以使用校验登录的接口，因为只有在登录成功之后客户端和服务器上才会有connect_sid
    // 当关闭服务再重新启动的时候，上次存储的session信息会被清除
    if (req.session.userId) {
        success(res);
    } else {
        success(res, {
            code: 1,
            codeText: 'NO'
        });
    }

});

// 退出登录的接口
route.get('/signout', (req, res) => {
    if (req.session.userId) {
        req.session.userId = null;
        req.session.power = null;
        success(res);
    } else {
        success(res, {
            code: 1,
            codeText: 'NO'
        });
    }

});

// 获取用户列表信息
route.get('/list', (req, res) => {
    let {
        departmentId = 0,
            search = ''
    } = req.query;

    req.$USERDATA = req.$USERDATA.map(item => {
        return {
            id: item.id,
            name: item.name,
            sex: item.sex,
            email: item.email,
            phone: item.phone,
            departmentId: item.departmentId,
            department: getDepartment(item.departmentId, req).name,
            jobId: item.jobId,
            job: getJob(item.jobId, req).name,
            desc: item.desc
        }
    });
    // 按照当前的部门id去过滤出相应的信息
    if (departmentId != 0) {
        req.$USERDATA = req.$USERDATA.filter(item => {
            return item.departmentId == departmentId;
        });
    }
    if (search != '') {
        req.$USERDATA = req.$USERDATA.filter(item => {
            return item.name.includes(search) || item.phone.includes(search) || item.email.includes(search);
        });
    }

    if (req.$USERDATA.length <= 0) {
        success(res, {
            code: 1,
            codeText: 'NO',
            data: []
        });
    }

    success(res, {
        data: req.$USERDATA
    });
});

// 获取用户信息
route.get('/info', (req, res) => {
    let {
        userId = req.session.userId
    } = req.query;

    let data = req.$USERDATA.find(item => {
        return item.id == userId;
    });

    if (!data) {
        success(res, {
            code: 1,
            codeText: 'NO',
            data: null

        });
        return;
    }
    data = {
        id: data.id,
        name: data.name,
        sex: data.sex,
        email: data.email,
        phone: data.phone,
        departmentId: data.departmentId,
        department: getDepartment(data.departmentId, req).name,
        jobId: data.jobId,
        job: getJob(data.jobId, req).name,
        desc: data.desc
    };
    success(res, {
        code: 0,
        codeText: 'OK',
        data
    });
});

module.exports = route; // {}