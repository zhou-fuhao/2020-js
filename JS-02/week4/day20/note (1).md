### I/O
    node的特点：单线程、无阻塞I/O、事件驱动
    ### I/O
    > I：input 输入
    > O：output 输出
    > I/O一般指对文件的读写操作

    JS在客户端浏览器中运行，能否对客户端本地的文件进行读写操作？
    > 答案：不能，因为要保证客户端的信息安全
    > input:type='file' 文件上传这种除外，但是这种也需要用户手动选择后才可以

    JS在服务器端运行（基于NODE运行），能否对服务器端的文件进行操作？
    > 答案：可以的
    > NODE赋予了JS进行I/O操作的能力（内置模块：fs）

### window & global
    1. 在客户端浏览器中运行JS，JS全局对象是：window（提供了很多内置的属性和方法）

    2. 在NODE中运行JS，全局对象是：global


    3. 在REPL命令中输出的this是global，但是在xxx.js中输出的this是当前模块本身

    4.npm的基础 知识在过一下
    
    // package.json中的scripes的用处
      + 在package.json中，可以基于scripts选项配置本地可执行的脚本命令 $npm run xxx
    ```
    "scripts": {
      //=>AAA是命令，值是要做的事情
      "AAA": "node xxx.js"
    }

    	+ 在配置可执行脚本命令的时候，基于process的环境变量区分开发还是生产环境
		```
		"scripts": {
			//=>set NODE_EVN=dev 设置全局环境变量（MAC下用 export NODE_EVN=dev）
    		"serve": "set NODE_EVN=dev&&node index.js",
   			"build": "set NODE_EVN=pro&&node index.js"
  		}


### CommonJS模块管理机制
> AMD：require.js
> CMD：sea.js
> CommonJS：node.js
> ES6 Module
> 这些模块化思想，规定了在JS中我们的模块该如何的创建、如何的导入以及如何导出

- 内置模块：NODE中自带的
	+ http/https 创建和管理服务的模块
	+ fs 给予JS进行I/O操作的
	+ url 解析URL地址的
	+ path 管理路径的
	+ ...
- 第三方模块：基于npm安装，别人写好供我们用的
	+ mime
	+ qs
	+ express
	+ express-session
	+ body-parser
	+ ...
- 自定义模块：自己写的模块

### NODE中的模块管理
1. 在NODE环境下，我们每创建一个JS，都相当于创建了一个新的模块；模块中的方法也都是模块的私有方法，不同模块之间的同名方法不会有任何的冲突；
(可以先拿单利模式举例子)  

2. module.exports就是NODE天生自带的用来导出模块中方法的方式
```
module.exports={
	//=>这些属性方法就是需要暴露给外面调取使用的
	xxx:xxx
};
```

3. require是NODE天生提供的用来导入模块的方法
```
//=>语法：
let [模块名] = require([模块的地址]);

//=>例如：
//1)可以省略.js后缀名
//2)如果是调取自己定义的模块，则需要加 /(根目录) ./(当前目录) ../(上级目录) 这三个中的某一个
//3)不加上述地址，则先找第三方模块（安装在自己本地的），如果没有安装，则找NODE中的内置模块，如果再没有，则报错
let A = require('./A');
let qs = require('qs');
```

4. require导入模块是同步的（没导入完成，后面的事情是不处理的）；每一次导入模块都是把导入的模块中的JS代码从上到下执行一遍（只执行一遍）；


### fs内置模块
> 提供大量的属性和方法，让JS在NODE环境中执行的时候，可以操作服务器上的资源文件，也就是给予了I/O操作的能力
- readdir readdirSync：异步或者同步读取指定目录下的文件目录
- readFile readFileSync：异步或者同步读取指定目录下的文件内容
- writeFile writeSync: 异步或者同步写指定目录下的文件内容