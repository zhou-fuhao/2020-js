
let uls = document.getElementsByTagName("ul");
uls = Array.from(uls);

let imgs = document.getElementsByClassName("bg");


getData();
// ajax请求数据
function getData() {
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open("get", "data/data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    bindHTML(data);
}

// 渲染页面
function bindHTML(data) {
    for (let i = 0; i < 20; i++) {
        // 随机产生 0-9 之间的随机数
        let index = Math.round(Math.random() * 9);
        // 从data中随机获取一张图片的信息
        let curImg = data[index];

        let li = document.createElement("li");
        let img = document.createElement("img");
        let p = document.createElement("p");

        // 把图片的真实路径放到img元素的行间
        img.setAttribute("true-img", curImg.src);
        img.className = "bg";
        // 随机获取180 - 250 之间的高度给img元素
        img.style.height = Math.round(Math.random() * (250 - 180) + 180) + "px";

        p.innerHTML = curImg.title;
        li.appendChild(img);
        li.appendChild(p);

        uls.sort(function (m, n) {
            return m.scrollHeight - n.scrollHeight;
        });
        uls[0].appendChild(li);
    }
}

// 图片懒加载
function delay() {
    for (let j = 0; j < imgs.length; j++) {
        delayImg(imgs[j]);
    }
}

// 对每一张图片进行是否显示的逻辑进行判断
function delayImg(img) {
    // 当图片的下边框  ===  当前浏览器可视窗口的下边框
    // 图片的总高度 + 图片的上偏移量  ===  浏览器滚动条卷曲的高度 + 浏览器可视窗口的高度

    // 图片的总高度
    let imgH = img.offsetHeight;
    // 图片距离body的上偏移量
    let imgT = utils.offset(img).top;
    // 浏览器可视窗口的高度
    let winH = utils.win("clientHeight");
    // 浏览器滚动条卷曲的高度
    let winT = utils.win("scrollTop");

    if (winH + winT + 150 >= imgH + imgT) {
        // 先获取当前图片的真实路径
        // 然后创建一个img元素，利用img元素去校验当前路径是否正确，如果正确，当前img元素的onload函数就会执行
        // 如果onload执行，在onload对应的函数里把正确的值给页面上img元素
        let trueImg = img.getAttribute("true-img");
        // 在js 中动态创建img标签
        let newImg = new Image;
        newImg.src = trueImg;
        newImg.onload = function () {
            img.src = trueImg;
            img.classList.remove("bg");
            utils.fadeIn(img);
        }
    }
}
delay();

// 分页
function isLoad() {
    // 判断当前图片是否继续分页请求
    // 当前浏览器滚动条卷曲的高度 + 浏览器可视区域的高度  >=  body的真实高度
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    let bodyH = utils.win("scrollHeight");
    // 当滚动条即将到达底部时，再次请求下一页的数据
    if (winH + winT + 100 >= bodyH) {
        getData();
    }
}

// 回到顶部
back.onclick = function () {
    // 移动距离是100，把100分成50份，让定时器每走一次就走50分之一，每运行一次18ms
    let distance = utils.win("scrollTop");
    let step = distance / 50;
    let timer = setInterval(() => {
        distance -= step;
        utils.win("scrollTop", distance);
        if (utils.win("scrollTop") <= 0) {
            clearInterval(timer);
        }
    }, 18);
}

// 大于浏览器可视区域显示回到顶部按钮
function isButtonShow() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    if (winT >= winH) {
        // 回到顶部按钮 显示
        utils.css(back, "display", "block");
    } else {
        // 回到顶部按钮 隐藏
        utils.css(back, "display", "none");
    }
}

window.onscroll = function () {
    delay();
    isLoad();
    isButtonShow();
}