### 处理less和css实现内嵌式引入页面
// npm i css-loader style-loader less less-loader autoprefixer postcss-loader -D 

### 处理css和less并且以外链式的方式引入页面
npm i mini-css-extract-plugin -D

### 把css进行压缩
npm i optimize-css-assets-webpack-plugin -D

### 把js进行压缩
npm i terser-webpack-plugin@4 -D

### 处理图片的
npm i file-loader url-loader html-withimg-loader -D
 - 项目中需要用到图片的地方
  - css中设置背景图片
  - js中动态设置图片的路径
  - 在html中直接引入图片

### es6转es5
npm i babel-loader @babel/core @babel/preset-env -D

### 编译promise
npm i @babel/plugin-transform-runtime -D
npm i @babel/polyfill @babel/runtime


### 语法检测
npm i eslint eslint-loader -D
