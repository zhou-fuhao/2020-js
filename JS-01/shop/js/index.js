(function () {
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open('get', './json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();

    // 进行dom元素排序（）
    let navList = document.querySelectorAll('#main .pai');
    let cardList = document.getElementsByTagName('li');
    let middleUl = document.querySelector("#middle>ul");


    // 把请求的数据渲染到页面
    renderHTML();
    function renderHTML() {
        let htmlStr = "";
        data.forEach(function (item, index) {
            htmlStr += `
          <li data-hot="${item.hot}" data-price="${item.price}"  data-time="${item.time}">
              <img src="${item.img}" alt="">
              <span>${item.title}</span>
              <span>时间：${item.time}</span>
              <span>热度：${item.hot}</span>
              <span>价格：${item.price}</span>
          </li>
          `;
        });
        middleUl.innerHTML = htmlStr;
    }

    cardList = utils.toArray(cardList);
    for (let i = 0; i < navList.length; i++) {
        navList[i].index = i;
        navList[i].flag = -1;
        navList[i].onclick = function () {
            this.flag *= -1;
            sortList.call(this);
            clearColor.call(this);
            addColor.call(this);
        }
    }

    // 排序方法
    function sortList() {
        //排序的逻辑
        let ary = ['data-time', 'data-hot', 'data-price'];

        cardList.sort((a, b) => {
            a = a.getAttribute(ary[this.index]);
            b = b.getAttribute(ary[this.index]);
            if (this.index === 0) {
                a = a.replace(/-/g, '');
                b = b.replace(/-/g, '');
            }
            return (a - b) * this.flag;
        });
        let frg = document.createDocumentFragment();
        for (let i = 0; i < cardList.length; i++) {
            frg.appendChild(cardList[i]);
        }
        middleUl.appendChild(frg);
    }


    //小箭头清除颜色代码 
    function clearColor() {
        // for循环清空颜色
        for (let i = 0; i < navList.length; i++) {
            navList[i].children[0].classList.remove("span_bg");
            navList[i].children[1].classList.remove("span_bg");
            if (navList[i] !== this) {
                navList[i].flag = -1;
            }
        }
    }

    // 小箭头增加颜色代码
    function addColor() {
        let up = this.children[0];
        let down = this.children[1];

        if (this.flag > 0) {
            up.classList.add('span_bg');
        } else {
            down.classList.add('span_bg');
        }

    }

})();