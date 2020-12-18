let outer = document.getElementById("outer");
let wrapper = document.getElementById("wrapper");//获取图片的容器
let lists = document.getElementById("lists");//获取焦点的容器
let data = null;

// 数据请求
function getData() {
    let xhr = new XMLHttpRequest;
    xhr.open("get", "./banner.json", false);
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
    let wrapperItems = "";
    let listsItems = "";
    data.forEach((item, index) => {
        wrapperItems += `<li><img src="${item.img}" alt=""></li>`;
        listsItems += `<li></li>`;
    });

    // 在复制第一张图片放到末尾(让最后一张和第一张一样)
    wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`;
    wrapper.innerHTML = wrapperItems;//把动态生成的图片插入到页面
    lists.innerHTML = listsItems;//把页面生成的焦点插入到页面
}

let step = 0;
function autoMove(index) {
    step++;
    typeof index === "undefined" ? null : step = index;
    // 如果当前的step>=5说明已经运动到最后一张图片，这时候需要立即把wrapper的left值改为0，(因为第一张和最后一张图片一样，所以看不到有变化)
    if (step >= data.length + 1) {
        wrapper.style.left = 0;
        // 这时候把step改为1，正常显示第二张
        step = 1;
    }
    changeFocus();
    utils.animate(wrapper, { left: -step * 800 }, 500);
}

let timer = setInterval(autoMove, 2000);

// 鼠标划上over事件轮播停止，鼠标out离开，轮播继续
outer.onmouseover = function () {
    clearInterval(timer);
}

outer.onmouseout = function () {
    timer = setInterval(autoMove, 2000);
}

// 实现焦点跟随
let tips = document.querySelectorAll("#lists li");
function changeFocus() {
    // 切换焦点显示
    // 循环所有的焦点，判断当前的step和哪个焦点的索引相等，和谁相等就给谁加上active类名，其余的清楚active
    // 如果当前的step是4，说明当前页面显示的是最后一张图片，他和第一张图片共用一个焦点，这时候让第一个焦点高亮就可以了
    for (let i = 0; i < tips.length; i++) {
        if (step == i) {
            tips[i].classList.add("active");
        } else {
            tips[i].classList.remove("active");
        }
    }
    if (step === tips.length) {
        tips[0].classList.add("active");
    }
}
changeFocus();

// 点击焦点，实现切换对应的图片
function bindClick() {
    for (let j = 0; j < tips.length; j++) {
        tips[j].onclick = function () {
            // step = j - 1;
            // autoMove();
            autoMove(j);
        }
    }
}
bindClick();

// 右箭头
right.onclick = function () {
    autoMove();
}

left.onclick = function () {
    step -= 2;
    if (step == -2) {
        wrapper.style.left = -data.length * 800 + "px";
        step = data.length - 2;
    }
    autoMove();
}