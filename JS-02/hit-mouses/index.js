window.onload = function () {
    let startBtn = document.getElementById('game-start'),
        numScore = document.getElementById('numScore'),
        gameTime = document.getElementById('gameTime'),
        diShu = document.getElementById('diShu');

    const upScore = 100,
          lostScore = 50;
    let time = 60,
        score = 0;
    startBtn.onclick = function() {
        startBtn.setAttribute('disabled', true);
        time = 60;
        score = 0;
        let timechange = setInterval(() => {
            changeText(gameTime, --time);
            // 游戏结束
            if(time === 0) {
                clearInterval(timechange);
                clearInterval(game);
                let mouses = [...diShu.getElementsByTagName('div')];
                mouses.forEach(ele => {
                    ele.style.display = 'none';
                })
                alert('游戏结束，您的得分是' + score);
                startBtn.removeAttribute('disabled');
            }
        }, 1000);
        let game = setInterval(() => {
            let mouses = [...diShu.getElementsByTagName('div')];
            // let mouses = Array.from(diShu.getElementsByTagName('div'));
            // let mouses = [].slice.call(diShu.getElementsByTagName('div'));
            mouses.forEach(ele => {
                ele.className = 'bad active';
                ele.style.display = 'none';
                ele.setAttribute('clicked', 0);
            })
            let num = getRandom(0,8);// 狼的数量
            for(let i=0;i<num;i++) {
                // 狼的索引
                mouses[getRandom(0,8)].className = 'good active';
            }
            // let arr = []
            for(let i=0;i<getRandom(0,8);i++) {
                // 随机生成索引， 并显示
                let mouse = mouses[getRandom(0,8)]
                mouse.style.display = 'block';
                // arr.push(mouse.classList.contains('good'));
            }
            // arr循环判断

        }, 2000)
    }
    diShu.onclick = function(e) {
        // console.log(e)
        let target = e.target;
        if(target.tagName !== 'DIV' || target.style.display !== 'block' || target.getAttribute('clicked') !== '0') {
            return;
        }
        console.log(111)
        if (target.classList.contains('good')) {
            // 点击的是狼
            score += upScore;
        }
        if (target.classList.contains('bad')) {
            // 点击的是兔子
            score -= lostScore;
        }
        changeText(numScore, score);
        target.setAttribute('clicked', 1);
    }
}
// 随机出现n个狼，9-n个兔子：首先让所有的div都变成兔子，再让n个div为狼
// 随机出现随机数个div
function changeText(ele, text) {
    ele.innerText = text;
}
function getRandom(n,m) {
    return Math.round(Math.random()*(m-n) + n);
}