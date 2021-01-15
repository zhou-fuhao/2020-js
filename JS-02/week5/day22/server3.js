// express 一款专门为node设计的框架，让node写起来更简单
const express = require('express');
const app = express();

app.listen(8888, () => {
    console.log('Success !');
});

app.use(express.static('./static'));
app.use((req, res, next) => {
    res.status(301);
    // res.send('not found!');
    res.redirect('https://www.baidu.com');
});