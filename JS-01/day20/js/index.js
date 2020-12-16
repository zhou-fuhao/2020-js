/*

*/

var data = null;

var strHTML = "";

var lists = document.getElementById("lists");

var links = document.querySelectorAll(".main .sortBtn");

var lis;
// 创建ajax实例
var xhr = new XMLHttpRequest();
// 打开请求的地址
// true 默认的是异步
// false 同步
xhr.open("get", "data/data.json");
xhr.onreadystatechange = function () {
    // xhr.status 符合以 2 开头的三位数
    if (xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)) {
        // 获取数据
        // 把JSON格式的字符串转为对象
        data = JSON.parse(xhr.responseText);
        // 绑定数据
        bindHTML(data);
    }
}
xhr.send();

// 绑定数据
function bindHTML(data) {
    data.forEach(function (x, y) {
        console.log(x.price);
    })

    data.forEach((item, index) => {
        strHTML += `<li time="${item.time}" hot="${item.hot}" price="${item.price}">
                        <img src="${item.img}" alt="">
                        <p id="title" class="title">${item.title}</p>
                        <p id="time" class="time">${item.time}</p>
                        <p id="numInfo" class="numInfo">
                            <span>${item.price}</span>
                            <span>${item.hot}</span>
                        </p>
                    </li>`;
    });
    lists.innerHTML = strHTML;
    lis = Array.from(document.querySelectorAll(".main li"));
}

for (let i = 0; i < links.length; i++) {
    links[i].flag = -1;
    links[i].onclick = function () {
        for (let i = 0; i < links.length; i++) {
            if (links[i] != this) {
                links[i].flag = -1;
            }
        }
        var that = this;
        this.flag *= -1;

        // 优化回流
        var frg = document.createDocumentFragment()

        var arrowArray = this.querySelectorAll("b");
        var currents = document.querySelectorAll(".topBar .current");
        for (let i = 0; i < currents.length; i++) {
            currents[i].classList.remove("current");
        }
        // 升序
        if (this.flag == 1) {
            arrowArray[0].classList.add("current");
        } else {
            // 降序
            arrowArray[1].classList.add("current");
        }

        // 对li 进行排序
        var sortFlag = this.getAttribute("sortFlag");
        // 时间排序
        if (sortFlag == "time") {
            lis.sort(function (m, n) {
                return (m.getAttribute(sortFlag).replace(/-/g, "") - n.getAttribute(sortFlag).replace(/-/g, "")) * that.flag;
            });

        } else {
            lis.sort(function (m, n) {
                return (m.getAttribute(sortFlag) - n.getAttribute(sortFlag)) * that.flag;
            });
        }

        // // 热度排序
        // if (sortFlag == "hot") {
        //     lis.sort(function (m, n) {
        //         return m.getAttribute("hot") - n.getAttribute("hot");
        //     });
        // }
        // // 价格排序
        // if (sortFlag == "price") {
        //      lis.sort(function (m, n) {
        //         return m.getAttribute("price") - n.getAttribute("price");
        //     });
        // }

        for (let i = 0; i < lis.length; i++) {
            frg.appendChild(lis[i]);
        }
        lists.appendChild(frg);
    }
}