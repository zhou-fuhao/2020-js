### jQuery

> jq是一款伟大的，用原生js封装的，【操作DOM的类库】。他里面封装了大量的方法，基于这些方法我们可以快速的进行DOM操作和项目的开发

### 学习jq的方法
  - 看API文档 http://jquery.cuishifeng.cn/
  - 看书籍
  - 做案例
  - 学习jq的源码
    + 更好的掌握jq的应用
    + 让自己的js能力、封装组件和插件的能力得到进一步的提升

### jq的三大版本
  - jquery-1.11.3.min.js 
    第一代版本的特点：大而全，方法是兼容所有浏览器的（包括IE6），主要应用于需要考虑兼容的PC端项目中

  - v2.xxx 第二代版本
    主要是为移动端的开发准备的，不在兼容低版本浏览器（例如：IE8及以下），配合出现的还有 jQuery mobile等UI库。但是，第二代版本在移动端方面的处理不如 Zepto.js

  - v3.xxx 第三代版本
    也不再兼容IE低版本浏览器了，它从性能等方面都要比之前的强，但是生不逢时，此时正好是angular / vue  / react这种框架崛起的时代，大家已经不再基于操作DOM的思想开发了，JQ也就慢慢退出舞台了

#### JQ中常用的方法

```javascript
//=>1.获取DOM元素
//操作方法：JQ选择器（根据选择器类型快速获取需要的元素）
$([selector],[context])
	$('#box')
	$('.imgBox')
	$('.box a')
    ...
/*JQ支持的选择器：传统CSS3中的大部分都支持、还支持一些自己独有的
 * :eq(n) 获取集合中索引为n的
 * :gt(n) 大于这个索引的
 * :lt(n) 小于这个索引的
 */    

------------------------------    
    
//节点之间关系的属性：用JQ选择器获取的元素，我们设置变量名的时候一般都以$开始
//=>还可以再设置对应的选择器进行二次筛选
let $box = $('.box');
$box.children('a'); //=>获取对应的子元素
$box.find('a'); //=>获取对应的后代元素
$('a').filter('.active'); //=>同级筛选（在所有的A中筛选出具备CLASS='ACTIVE'样式类的A）
$box.prev();
$box.prev('p'); //=>获取它上一个标签名为P的哥哥
$box.prevAll();
$box.next();
$box.nextAll('.link');
$box.siblings(); //=>获取所有的兄弟
$box.index(); //=>获取索引
$box.parent(); //=>获取父元素
$box.parents(); //=>获取所有的祖先元素，一直到document

------------------------------  

//=>2.DOM增删改
let str = `<div id="box" class='box'>
	...
</div>`;
$('body').append(str); //=>追加到容器BODY的末尾
$('body').html(str); //=>等价于innerHTML  $('body').html()不传参是获取BODY中的HTML内容，除了这个方法还有text方法，等价于innerText



$A.clone();  //=>实现元素的克隆
$A.remove(); //=>实现元素的删除

//=>操作表单元素的内容
$inp.val() //获取表单元素内容
$inp.val('AAA') //设置表单元素内容
//html和text方法是操作非表单元素内容的

------------------------------  

//=>3.操作自定义属性
$box.attr('data-type') //=>获取自定义属性值
$box.attr('data-type','B') //=>设置自定义属性值
$box.attr({
    'type':1,
    'name':'AA'
}); //=>批量设置
$box.removeAttr('data-type');//=>移除自定义属性

//表单元素操作内置或者自定义属性一般使用prop和removeProp
$radio.prop('checked')
$radio.prop('checked',true)
...

//=>4.操作CSS样式（盒子模型属性）
//设置样式
$box.css('width',200); //=>css方法是设置或者批量设置样式（原理是设置STYLE行内样式）$box.css({ width:200,height:200 })，写的值不加单位，方法会帮我们自动设置上px单位
$box.addClass('active');//=>设置样式类（原理是对className的操作），removeClass是移除，hasClass验证是否存在某个样式类，toggleClass之前有就是移除，没有就是新增

//获取样式
$box.css('width'); //=>不设置值的时候就是获取（原理是getComputedStyle，所有经过计算的样式都可以获取）
$box.offset(); //=>当前元素距离BODY的左偏移和上偏移
$box.position(); //=>当前元素距离父参照物的左偏移和上偏移
$box.innerWidth/.innerHeight/.outerWidth/.outerHeight() //=>等价于clientWidth/Height 和 offsetWidth/Height
$(document).scrollTop([val]); //=>可以获取或者设置scrollTop的信息，对应的方法 .scrollLeft
```

除了操作DOM，JQ中还提供了其它有助于项目开发的方法

```javascript
//=>事件处理
//$元素.on([event type],[function])
//$元素.off([event type],[function])
//$元素.bind()  $元素.unbind()  $元素.delegate() ...
//$元素.click() .mouseover .mouseout ...等常用事件的快捷绑定
$box.on('click',function(){});
$box.click(function(){});

//=>动画处理
//.animate([目标样式],[总时间],[运动方式],[运动完做的事情])
//.stop / .finish
$box.stop().animate({
    top:100,
    left:200
},1000,'linear',function(){});

//=>AJAX请求处理
let _DATA=null;
$.ajax({
    url:'json/product.json',
    method:'GET',
    async:false,
    dataType:'json',
    success:result=>{
        //result:当请求成功执行success函数，result就是从服务器获取的结果
        _DATA=result;
    }
});

//=>常用的工具方法
$.each([数组、类数组、对象],function(index,item){
    //=>遍历数组中的每一项 index:索引 item:当前循环这一项（对象：index是属性名 item属性值）
});
$('A').each(function(index,item){});

