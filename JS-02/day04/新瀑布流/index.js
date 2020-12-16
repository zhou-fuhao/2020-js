(function () {
    // ajax数据请求
    let data = null;
    let uls = document.getElementsByTagName('ul');
    uls = Array.from(uls); // 类数组转数组
    function send(){
        let xhr = new XMLHttpRequest;
        xhr.open('get', 'data.txt', false);
        xhr.onreadystatechange = function () {
            if (/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
                data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send();
        bindHtml();
    }
    send()
    //----------------------------------------------------------
    // 数据渲染

    
    function bindHtml() {
        for (let i = 0; i < 20; i++) {
            // 通过随机数字找到一个图片的信息
            // 随机生成li，img，p标签，并且赋值上相应的数据
            let index = Math.round(Math.random() * (9 - 0) + 0);
            let curImg = data[index];

            let li = document.createElement('li');
            let img = document.createElement('img');
            let p = document.createElement('p');
            p.innerHTML = curImg.title;
            // console.log(curImg, index);
            img.setAttribute('true-img', curImg.src);
            img.className = 'bg';
            img.style.height = Math.round(Math.random() * (250 - 180) + 180) + 'px';
            li.appendChild(img);
            li.appendChild(p);
            uls.sort((a, b) => {
                return a.scrollHeight - b.scrollHeight;
            });
            uls[0].appendChild(li);
        }
    };

    let imgs = document.getElementsByClassName('bg');
    function delay(){
        console.log(1);
        for(let i = 0;i<imgs.length;i++){
            check(imgs[i])
        }
    }

   function check(img){
       console.log(100);
        if(img.flag){
            return;
        }
        let winH = utils.win('clientHeight');
        let winT = utils.win('scrollTop');
        let imgH = img.offsetHeight;
        let imgT = utils.offset(img).top;
        if(winH+winT>=imgH+imgT){
            console.log('render');
            let trueImg = img.getAttribute('true-img');
            let newImg = new Image;
            newImg.src = trueImg;
            newImg.onload = function(){
                img.src = trueImg;
                img.flag = true;
                img.className = '';
                fadeIn(img)
            }
        }
    }
    function fadeIn(img){
        img.style.opacity = 0;
        let cur = Number(img.style.opacity);
        let timer = setInterval(()=>{
            cur+=0.05;
            img.style.opacity = cur;
            if(cur>=1){
                clearInterval(timer)
            }
        },17)
    }

    function isSend(){
        let winH = utils.win('clientHeight');
        let winT = utils.win('scrollTop');
        let bodyH = utils.win('scrollHeight');
        if(winH+winT+200>=bodyH){
            send()
        }
    }

    back.onclick = function(){
        let winT = utils.win('scrollTop');
        let cur = winT/50;
        let timer = setInterval(()=>{
            winT-=cur;
            utils.win('scrollTop',winT);
            if(winT<=0){
                clearInterval(timer)
            }
        },20)
    }
    function isBack(){
        let winH = utils.win('clientHeight');
        let winT = utils.win('scrollTop');
        if(winT>=winH){
            back.style.display = 'block';
        }
        else {
            back.style.display = 'none';
        }
    }


    delay();
    window.onscroll = function(){
        delay();

        // 判断滑动到底部，在继续请求
        isSend();
        isBack();
    };

})()