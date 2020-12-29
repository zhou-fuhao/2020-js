 /* 
    点击按钮的时候：让数量相应的增减
     怎么知道是加法按钮 还是减法按钮？ 在结构中增加了一个自定义属性flag 
      + flag=1 
      - flag=0
    */

   var buttons=document.querySelectorAll(".shopContent button");
   var lis=document.querySelectorAll(".shopContent li");
   //  所有的数量盒子
   var numArrayEle=document.querySelectorAll(".shopContent .num");
   var totalNumEle=document.querySelector(".shopInfo .totalNum");
   var xjMoneyArrayEle=document.querySelectorAll(".shopContent .xjMoney");
   var totalMoneyEle=document.querySelector(".shopInfo .totalMoney");
   var specileItemPriceEle=document.querySelector(".shopInfo .specileItemPrice");
   for(var i=0;i<buttons.length;i++){
        // 给按钮绑定点击事件
        buttons[i].onclick=function(){
            debugger;
            var flag=this.getAttribute("flag");
            var parentEle=this.parentNode;
            // 单价
            var itemPrice=Number(parentEle.querySelector(".itemPrice").innerText);
            //  小计盒子
            var xjMoneyEle=parentEle.querySelector(".xjMoney");
            var numEle=parentEle.querySelector(".num");
            var oldNum=Number(numEle.innerText);
            var nowNum=0;
             // 总件数
           var totalNum=0;
            // 总钱数
           var totalMoney=0;
           //  数量大于0的数组
           var numAry=[];
           var maxMoney=null;
            console.log(xjMoneyEle);
            // 加法按钮
            if(flag==1){
                nowNum= oldNum+1;
            }else{
             //减法按钮
                if(oldNum-1<0){
                    nowNum=0;
                    return;
                }
                nowNum= oldNum-1;
            }
            numEle.innerText=nowNum;
            xjMoneyEle.innerText=itemPrice*nowNum;
            // 计算总数
            for(var i=0;i<numArrayEle.length;i++){
                totalNum+=Number(numArrayEle[i].innerText);
                totalMoney+=Number(xjMoneyArrayEle[i].innerText);
            }
            totalNumEle.innerText=totalNum;
            // for(var i=0;i<xjMoneyArrayEle.length;i++){
            //    totalMoney+=Number(xjMoneyArrayEle[i].innerText);
            // }
            // console.log(totalMoney);
            totalMoneyEle.innerText=totalMoney;
            for(var i=0;i<lis.length;i++){
                 var item=lis[i];
                 // 选中
                 if(item.querySelector(".num").innerText>0){
                     // 获取单价
                   var value= item.querySelector(".itemPrice").innerText;
                   numAry.push(value);
                 }
                 console.log(numAry);
             }
             if(numAry.length<1){
                maxMoney="----";
             }else{
                maxMoney=numAry.sort(function(a,b){
                  return a-b;
                })[numAry.length-1];
             }
             console.log(maxMoney);
             specileItemPriceEle.innerText=maxMoney;
        }
   }