var ofooterBoxs = "";
var ofooters = document.getElementById("footer");
var obuttons = document.querySelectorAll("button");

(function () {
    var strHTML = "";
    for (let i = 0; i < phone.length; i++) {
        var item = phone[i];
        strHTML += "<div id='footerBox' class='footerBox' price='" + item.price + "' hot='" + item.hot + "' time='" + item.time + "'>"
            + "<div id='footerImg' class='footerImg'><img src='" + item.img + "' /></div>"
            + "<div id='footerInfo' class='footerInfo'>" + item.title + "</div>"
            + "<div id='footerDate' class='footerDate'>" + item.time + "</div>"
            + "<div id='footerBottom' class='footerBottom'>"
            + "<div id='bottomLeft' class='bottomLeft'>" + item.price + "</div>"
            + "<div id='bottomRight' class='bottomRight'>" + item.hot + "</div></div></div>";
    }
    footer.innerHTML = strHTML;
    ofooterBoxs = Array.from(document.querySelectorAll("#main .footer>.footerBox"));
})();

for (let i = 0; i < obuttons.length; i++) {
    obuttons[i].dataFlag = -1;
    obuttons[i].onclick = function () {
        for (let i = 0; i < obuttons.length; i++) {
            if (obuttons[i] != this) {
                obuttons[i].dataFlag = -1;
            }
        }

        var that = this;
        this.dataFlag *= -1;

        var btnImg = document.querySelectorAll(".sortBtn img");

        for (let jj = 0; jj < btnImg.length; jj++) {
            btnImg[jj].setAttribute("src", "img/sort.png");
        }

        if (that.dataFlag == 1) {
            btnImg[i].setAttribute("src", "img/sort1.png");
        } else {
            btnImg[i].setAttribute("src", "img/sort2.png");
        }

        var sortFlag = document.getElementsByTagName("button")[i].getAttribute("sortFlag");

        if (sortFlag == "time") {
            ofooterBoxs.sort(function (m, n) {
                return (m.getAttribute(sortFlag).replace(/-/g, "") - n.getAttribute(sortFlag).replace(/-/g, "")) * that.dataFlag;
            });
        } else {
            ofooterBoxs.sort(function (m, n) {
                return (m.getAttribute(sortFlag) - n.getAttribute(sortFlag)) * that.dataFlag;
            });
        }

        for (let i = 0; i < ofooterBoxs.length; i++) {
            ofooters.appendChild(ofooterBoxs[i]);
        }
    }
}