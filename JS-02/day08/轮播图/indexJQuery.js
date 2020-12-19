let data = null;
let timer = null;
let step = 0;

// 请求数据
function getData() {
    $.ajax({
        url: "./banner.json",
        type: 'get',
        async: false,
        success: ((res) => {
            data = res;
        })
    });
}
getData();


// 数据渲染
function renderHTML() {
    let wrapperItems = "";
    let listsItems = "";
    $.each(data, function (index, item) {
        wrapperItems += `<li><img src="${item.img}" alt=""></li>`;
        listsItems += `<li></li>`;
    });
    $("#wrapper").html(wrapperItems);
    $("#lists").html(listsItems);
}

renderHTML();

// 
function autoMove(index) {
    step++;
    typeof index === "undefined" ? null : step = index;
    if (step == data.length) {
        step = 0;
    }
    changeFocus();
    $("#wrapper").css({ left: -step * 800 });
    // $("#wrapper li").eq(step).fadeIn().siblings().fadeOut();
}
timer = setInterval(autoMove, 2000);

// 鼠标划上图片停止轮播，鼠标离开图片继续轮播
$("#outer").mouseover(() => {
    clearInterval(timer);
});

$("#outer").mouseout(() => {
    timer = setInterval(autoMove, 1000);
});

// 实现焦点跟随
let tips = $("#lists li");
function changeFocus() {
    $("#lists li").eq(step).addClass("active").siblings().removeClass("active");
}
changeFocus();


// 点击焦点，实现切换对应的图片
$("#lists li").click(function () {
    autoMove($(this).index());
});

// 左右箭头实现图片切换
$("#right").click(() => {
    autoMove();
});

$("#left").click(() => {
    step -= 2;
    if (step == -2) {
        $("#wrapper").css({ left: -data.length * 800 });
        step = data.length - 2;
    }
    autoMove();
});