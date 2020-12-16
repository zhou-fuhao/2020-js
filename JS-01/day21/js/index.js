
let lis;
let data = null;
let strHTML = "";
let olists = document.getElementById("lists");
let links = document.querySelectorAll(".main .sortBtn");

var xhr = new XMLHttpRequest();
xhr.open("get", "data/data.json");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText);
        bindHTML(data);
    }
}
xhr.send();

function bindHTML(data) {
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
    olists.innerHTML = strHTML;
    lis = Array.from(document.querySelectorAll(".main li"));
}
for (let i = 0; i < links.length; i++) {
    links[i].flag = -1;
    links[i].onclick = function () {

        for (let j = 0; j < links.length; j++) {
            if (links[i] != this) {
                links[i].flag = -1;
            }
        }

        var frg = document.createDocumentFragment();
        var arrowsArr = this.querySelectorAll("b");
        var currents = document.querySelectorAll(".topBar .current");

        let that = this;
        this.flag *= -1;

        for (let i = 0; i < currents.length; i++) {
            currents[i].classList.remove("current");
        }

        if (this.flag == 1) {
            arrowsArr[0].classList.add("current");
        } else {
            arrowsArr[1].classList.add("current");
        }

        var sortFlag = this.getAttribute("sortFlag");
        if (sortFlag == "time") {
            lis.sort(function (m, n) {
                return ((m.getAttribute(sortFlag).replace(/-/g, "")) - (n.getAttribute(sortFlag).replace(/-/g, ""))) * that.flag;
            });
        } else {
            lis.sort(function (m, n) {
                return (m.getAttribute(sortFlag) - n.getAttribute(sortFlag)) * that.flag;
            })
        }
        for (let j = 0; j < lis.length; j++) {
            frg.appendChild(lis[j]);
        }
        olists.appendChild(frg);
    }
}
