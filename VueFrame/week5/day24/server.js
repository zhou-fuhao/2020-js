const express = require('express');
const app = express();
app.listen(8888,()=>{
  console.log('888-->success');
});
app.use(express.static('./'));
const request = require('request');

app.get('/asimov/subscriptions/recommended_collections', function (req, res) {
    let url = 'https://www.jianshu.com' + req.url;
    // /asimov/subscriptions/recommended_collections
    req.pipe(request(url)).pipe(res); // 这是往简书的服务器上发送请求了(二道贩子)
});

    // https://www.jianshu.com/asimov/subscriptions/recommended_collections