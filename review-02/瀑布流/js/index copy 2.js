
let uls = document.getElementsByTagName("ul");
uls = Array.from(uls);

let imgs = document.getElementsByClassName("bg");

// ajax请求数据
getData();
function getData() {
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open('get', 'data/data.txt', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    bindHTML(data);
}

// 渲染页面
function bindHTML(data) {
    for (let i = 0; i < 20; i++) {

        let index = Math.round(Math.random() * 9);
        let curImg = data[index];

        let li = document.createElement("li");
        let img = document.createElement("img");
        let p = document.createElement("p");

        img.setAttribute("true-img", curImg.src);
        img.className = "bg";
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
    for (let i = 0; i < imgs.length; i++) {
        delayImg(imgs[i]);
    }
}

// 对图片进行判断是否显示
function delayImg(img) {
    // 当图片的下边框  ===  当前浏览器可视窗口的下边框
    // 图片的总高度 + 图片的上偏移量  ===  浏览器滚动条卷曲的高度 + 浏览器可视窗口的高度

    let imgH = img.offsetHeight;
    let imgW = utils.offset(img).top;

    let winH = utils.win("clientHeight");
    let winW = utils.win("scrollTop");

    if (winH + winW >= imgH + imgW) {
        let trueImg = img.getAttribute("true-img");
        let newImg = new Image;
        newImg.src = trueImg;
        newImg.onload = function () {
            img.src = trueImg;
            img.classList.remove("bg");
        }
    }
}

delay();

// 分页
function isLoad() {
    // 判断当前图片是否继续分页请求
    // 当前浏览器滚动条卷曲的高度 + 浏览器可视区域的高度  >=  body的真实高度
    let winH = utils.win("clientHeight");
    let winW = utils.win("scrollTop");

    let bodyH = utils.win("scrollHeight");
    if (winH + winW + 100 >= bodyH) {
        getData();
    }
}

// 回到顶部
back.onclick = function () {
    let distance = utils.win("scrollTop");
    let step = distance / 50;
    let timer = setInterval(() => {
        distance -= step;
        utils.win("scrollTop", distance);
        if (distance <= 0) {
            clearInterval(timer);
        }
    }, 18);
}

// 大于浏览器可视区域显示 回到顶部按钮
function isButtonShow() {
    let winH = utils.win("clientHeight");
    let winW = utils.win("scrollTop");
    if (winW >= winH) {
        // back.style.display = "block";
        utils.css(back, "display", "block");
    } else {
        // back.style.display = "none";
        utils.css(back, "display", "none");
    }
}

// 滚动条事件
window.onscroll = function () {
    delay();
    isLoad();
    isButtonShow();
}