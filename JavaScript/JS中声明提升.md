JS在代码生成前, 会先对代码进行编译, 编译的一部分工作就是找到所有声明, 然后建立作用域将其关联起来, 因此, 在当前作用域内 包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理.  

注意这里是“声明”会被提前处理, 赋值并没有, 定义声明是在编译阶段进行的，而赋值是在执行阶段进行的. 也就是说声明提升了, 赋值还留着原地, 等待执行.  
## 变量  
```JavaScript
 console.log(a);
 var a = 2;
```
等价于
```JavaScript
 var a ;         // a的默认值undefined
 console.log(a); // undefined
 a = 2;
```
## 函数表达式  
```JavaScript
 a();     //a不是函数
 var a = function(){...};
```
一个简单的方法判断是函数表达式还是函数 : function关键字如果是整个声明的第一个词，那么就是函数，否则就是函数表达式
```JavaScript
console.log(a); // ReferenceError  a is not defined
+function a(){ console.log(1); } //function不是第一个词
```
## 函数  
函数提升和变量提升都会被提升, 但是有一个比较重要的细节, 函数提升的优先级最高, 将首先被提升.  
```JavaScript
foo();

function foo(){ console.log(1); }

var foo = function(){ console.log(2); }

foo();
```
等价于
```JavaScript
var foo ;  //重复的声明将被忽略
function foo(){ console.log(1); }

foo(); //1

foo = function(){ console.log(2); }

foo(); //2
```

[深入理解 js 声明提升( 尾部有总结 和 面试题解析 )](https://segmentfault.com/a/1190000011126068)