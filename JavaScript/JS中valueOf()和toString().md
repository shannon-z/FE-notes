toString() 和 valueOf() 是对象的两个方法，你在浏览器后台输入Object.protototype就可以看到了它们是其中的两个.  

toString( ):返回对象的字符串表示。  
valueOf( ):返回对象的字符串、数值或布尔值表示。 

( undefined  和 null  的值就不举例了，因为它们都没有这两个方法，所以肯定会报错的 )
```JavaScript
//先看看toString()方法的结果
var a = 3;
var b = '3';
var c = true;
var d = {test:'123',example:123}
var e = function(){console.log('example');}
var f = ['test','example'];

a.toString();// "3"
b.toString();// "3"
c.toString();// "true"
d.toString();// "[object Object]"
e.toString();// "function (){console.log('example');}"
f.toString();// "test,example"
```

```JavaScript
//再看看valueOf()方法的结果
var a = 3;
var b = '3';
var c = true;
var d = {test:'123',example:123}
var e = function(){console.log('example');}
var f = ['test','example'];

a.valueOf();// 3
b.valueOf();// "3"
c.valueOf();// true
d.valueOf();// {test:'123',example:123}
typeof d.valueOf();//object
e.valueOf();// function(){console.log('example');}
f.valueOf();// ['test','example']
```

```JavaScript
//例子一
var example = {test:'123'};
console.log(+example);// NaN

//例子二 同时改写 toString 和 valueOf 方法
var example = {
    toString:function(){
        return '23';
    },
    valueOf:function(){
        return '32';
    }
};
console.log(+example);// 32

//例子三 只改写 toString 方法
var example = {
    toString:function(){
        return '23';
    }
};
console.log(+example);// 23
```
加法操作符(+对象) valueOf() -> toString() -> Number()

字符串+对象 valueOf() -> toString()  

alert()  toString()

[关于javascript中的toString()和valueOf()](https://segmentfault.com/a/1190000010824347)

