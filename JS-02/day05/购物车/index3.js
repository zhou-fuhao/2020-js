
let $nums = $("ul .num");
let $buttons = $("ul button");


$buttons.click(function () {
    // 获取当前点击按钮元素的索引
    let index = $(this).index();
    // 获取num 的值，累加 或 累减
    let num = $(this).siblings('.num').html();
    // 单价
    let $itemPrice = $(this).siblings().children(".itemPrice").html();
    // 小计
    // let $xjMoney = $(this).siblings().children(".xjMoney").html();

    // 操作加号
    if (index == 0) {
        num++;
    } else {
        // 操作减号
        num--;
        num < 0 ? num = 0 : num;
    }
    // 加减时 给 num 赋值
    $(this).siblings('.num').html(num);
    // 加减时 给 小计 赋值
    $(this).siblings().children(".xjMoney").html($itemPrice * num);

    // 调用总计方法
    total();
})

function total() {
    // 商品总计
    let $totalNum = 0;
    // 总计花费
    let $totalMoney = 0;
    let newArr = [0];
    // 最贵的商品单价
    let itemPriceArr = [0];
    $nums.each(function (index, item) {
        // 获取 num 的值累加给商品总件数
        $totalNum += Number($(item).html());
        $totalMoney += Number($(item).siblings().children(".xjMoney").html());

        if ($(this).html() > 0) {
            newArr.push(Number($(this).html()));
            itemPriceArr.push($(item).siblings().children(".itemPrice").html());
        }
    })
    $(".totalNum").html($totalNum);
    $(".totalMoney").html($totalMoney);
    // console.log(Math.max(...newArr));
    // console.log(Math.max(...itemPriceArr));
    $(".specileMoney").html(Math.max(...itemPriceArr));

}
