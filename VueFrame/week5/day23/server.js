const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const {
    readFile
} = require('./promiseFS');
const {
    handledData
} = require('./utils/utils');


app.use(session({
    secret: 'ZFPX',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}));


app.use(express.static('./client'));
// 把当前请求的主体信息挂载到req.body上
app.use(bodyParser.urlencoded({
    extended: true
}));

// 在真正的接口数据处理前，把json文件夹里所有的数据全部获取到并挂载到req上
app.use((req, res, next) => {
    let p1 = readFile('./json/user.json');
    let p2 = readFile('./json/department.json');
    let p3 = readFile('./json/job.json');
    let p4 = readFile('./json/customer.json');
    let p5 = readFile('./json/visit.json');
    // 等到五个全部读取完成之后，再去挂载到req上
    Promise.all([p1, p2, p3, p4, p5]).then((result) => {
        let [$USERDATA, $DEPARTMENTDATA, $JOBDATA, $CUSTOMERDATA, $VISITDATA] = result;
        // 往req身上新增5个键值对，属性值分别是每一个json中的数据
        req.$USERDATA = handledData($USERDATA);
        req.$DEPARTMENTDATA = handledData($DEPARTMENTDATA);
        req.$JOBDATA = handledData($JOBDATA);
        req.$CUSTOMERDATA = handledData($CUSTOMERDATA);
        req.$VISITDATA = handledData($VISITDATA);
        // 让代码继续向下执行
        next();
    }).catch((err) => {
        res.status(500);
        res.send('server is fail!');
    });
});

// 当请求的时候，会按照一级路径找到对应的处理模块，然后再模块里再按照二级路径进行请求的逻辑处理
app.use('/user', require('./router/user'));
app.use('/department', require('./router/department'));
app.use('/customer', require('./router/customer'));
app.use('/job', require('./router/job'));
app.use('/visit', require('./router/visit'));

app.use((req, res) => {
    res.status(404);
    res.send('not found');
});

app.listen(8889, () => {
    console.log('8889 -> successful!');
});