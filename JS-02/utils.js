var utils = (function () {

    // 封装一个获取盒子距离body的偏移量的方法
    function offset(ele) {
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        let parent = ele.offsetParent;

        while (parent !== document.body) {
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = ele.offsetParent;
        }
        return {
            left,
            top
        }
    }

    // 针对浏览器要操作的属性，给属性赋值
    function win(attr, value) {
        if (value == undefined) {
            return document.documentElement[attr] || document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    

    // 封装获取 或者 设置css样式的一些方法
    function getCss(ele, attr) {
        let value = null;
        if ("getComputedStyle" in window) {
            value = getComputedStyle(ele)[attr];
        } else {
            value = ele.currentStyle[attr];
        }
        // 把可能要累加的样式转换为数字
        let reg = /^(width|height|left|right|top|bottom|margin|padding|opacity|lineHeight|fontSize)$/;
        if (reg.test(attr)) {
            value = parseFloat(value);
        }
        return value;
    }

    function setCss(ele, attr, value) {
        // 1、先确定当前的样式需不需要加单位
        // 2、再确定当前样式有没有加单位
        let reg = /^(width|height|left|right|top|bottom|margin|padding|opacity|lineHeight|fontSize)$/;
        if (reg.test(attr)) {
            let number = parseFloat(value);
            ele.style[attr] = value + "px";
        }
        ele.style[attr] = value;
    }


    function setGroupCss(ele, obj) {
        // 循环当前对象，每循环一次就调用setCss一次
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                setCss(ele, key, obj[key]);
            }
        }
    }

    function css() {
        // 通过判断传参个数和传递参数的类型，就能判断出用户的意图
        let [ele, attr, value] = arguments;
        if (arguments.length === 3) {
            setCss(ele, attr, value);
        }
        if (arguments.length === 2) {
            if (typeof attr === "object") {
                setGroupCss(ele, attr, value);
            } else {
                return getCss(ele, attr);
            }
        }
    }


    return {
        offset,
        win,
        getCss,
        setCss,
        setGroupCss,
        css
    }
})();