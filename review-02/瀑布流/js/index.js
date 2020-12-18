
let uls = document.getElementsByTagName("ul");
uls = Array.from(uls);
let imgs = document.getElementsByClassName("bg");

// 请求数据
function getData() {
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open("get", "data/data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    renderHTML(data);
}
getData();


// 数据渲染
function renderHTML(data) {
    for (let j = 0; j < 20; j++) {

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

// 判断图片路径是否正确
function delayImg(img) {
    let imgH = img.offsetHeight;
    let imgT = utils.offset(img).top;

    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");

    if (winH + winT >= imgH + imgT) {
        let trueImg = img.getAttribute("true-img");
        let newImg = new Image;
        newImg.src = trueImg;
        newImg.onload = function () {
            img.src = newImg.src;
            img.classList.remove('bg');
            utils.fadeIn(img);
        }
    }
}

delay();

// 是否继续加载
function isLoad() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");

    let bodyH = utils.win("scrollHeight");

    if (winH + winT + 100 >= bodyH) {
        getData();
    }
}

// 点击按钮 回到顶部
back.onclick = function () {
    let dance = utils.win("scrollTop");
    let step = dance / 50;
    let timer = setInterval(() => {
        dance -= step;
        utils.win("scrollTop", dance);
        if (dance <= 0) {
            clearInterval(timer);
        }
    }, 17);
}

// 小于浏览器可视区域回到顶部按钮隐藏
function isButtonShow() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    if (winT + 100 >= winH) {
        utils.css(back, "display", "block");
    } else {
        utils.css(back, "display", "none");
    }
}

// 滚动条滑动时调用
function scrollBarSlide() {
    delay();
    isLoad();
    isButtonShow();
}

window.onscroll = throttle(scrollBarSlide, 100);

// 节流 - 立即执行
// function throttle(fn, time) {
//     let previos = 0;
//     return function () {
//         let now = Date.now();
//         if (now - previos > time) {
//             fn.call(this);
//             previos = now;
//         }
//     }
// }

// 节流 - 非立即执行
function throttle(fn, time) {
    let timer;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.call(this);
            }, time);
        }
    }
}