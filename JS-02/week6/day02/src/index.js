// 当前页面是html页面的打包入口，大部分资源在这里都可以进行编译和打包


// 把index.less文件的内容引入到打包的入口内
import './static/css/index.less';

// 在js中如果想使用图片的资源路径，必须使用require导入的方式去使用
// 如果当前图片的路径是外网的，可以直接写
// 如果当前图片的路径是项目中的，必须使用require导入的方式去使用
let img = document.createElement('img');
img.src = require('./static/images/4.jpg');
document.body.appendChild(img);