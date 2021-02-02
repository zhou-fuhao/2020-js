
var lis;
var data = "";
var strHTML = "";
var lists = document.getElementById("lists");
var links = document.querySelectorAll(".main .sortBtn");

var xhr = new XMLHttpRequest();
xhr.open("get", "data/data.json");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText);
        bindHTML(data);
    }
}
xhr.send();

function bindHTML(data) {
    data.forEach((item) => {
        strHTML += `<li time="${item.time}" hot="${item.hot}" price="${item.price}">
                        <img src="${item.img}" alt="">
                        <p id="title" class="title">${item.title}</p>
                        <p id="time" class="time">${item.time}</p>
                        <p id="numInfo" class="numInfo">
                            <span>${item.price}</span>
                            <span>${item.hot}</span>
                        </p>
                    </li>`;
    })
    lists.innerHTML = strHTML;
    lis = Array.from(document.querySelectorAll(".main li"));
}
for (let i = 0; i < links.length; i++) {
    links[i].flag = -1;
    links[i].onclick = function () {

        for (let j = 0; j < links.length; j++) {
            if (links[j] != this) {
                links[j].flag = -1;
            }
        }

        var that = this;
        this.flag *= -1;

        // 优化回流
        var frg = document.createDocumentFragment();

        // 样式
        var arrowsArr = this.querySelectorAll("b");
        var currents = document.querySelectorAll(".topBar .current");
        for (let j = 0; j < currents.length; j++) {
            currents[j].classList.remove("current");
        }
        if (this.flag == 1) {
            arrowsArr[0].classList.add("current");
        } else {
            arrowsArr[1].classList.add("current");
        }

        // 排序
        var sortFlag = this.getAttribute("sortFlag");

        if (sortFlag == "time") {
            lis.sort(function (m, n) {
                return (m.getAttribute(sortFlag).replace(/-/g, "") - n.getAttribute(sortFlag).replace(/-/g, "")) * that.flag;
            });
        } else {
            lis.sort(function (m, n) {
                return (m.getAttribute(sortFlag) - n.getAttribute(sortFlag)) * that.flag;
            });
        }
        for (let j = 0; j < lis.length; j++) {
            frg.appendChild(lis[j]);
        }
        lists.appendChild(frg);
    }
}