# 第三章 基本概念
## 函数  
ECMASript 中函数在定义时不必指定是否返回值, 任何函数在任何时候都可以通过return 语句后跟要返回的值来实现返回值 .  
函数会在执行完return语句之后停止并立即退出.  
return 语句也可以不带有返回值, 这种情况下, 函数会在停止执行后将返回undefined值.  

### 参数  
ECMAScript 中的参数在内部是用一个数组来表示的, 函数接受到的始终是这个数组, 而不关心数组中包含哪些参数, 也就是不关心参数的个数和类型. 实际上, 在函数体内可以通过arguments 对象来访问这个参数数组, 从而获取传递给函数的每个参数.(arguments 对象只是和数组相似, 并不是Array 的实例, 可以用方括号语法访问它的元素和length属性)  

```JavaScript
function sayHi(){
    console.log('hi ' + arguments[0] + arguments[1]);
}

sayHi('sa', ' love you');
```
命名的参数只是提供便利, 但不是必需的. 在命名参数方面, 其他语言可能需要事先创建一个函数签名, 而将来的调用必须与该签名一致, 但在ECMAScript 中, 解析器不会验证命名参数.  
```JavaScript
function doAdd(num1, num2){
    if(arguments.length == 1){
        console.log(num1 + 10);
    }else if(arguments.length == 2){
        console.log(arguments[0] + num2);
    }
}
```
arguments 对象可以跟命名参数一起使用. arguments的值永远与对应的命名参数的值保持同步.arguments 对象中的值会自动反应到对应的命名参数中,所以修改了arguments[1] , 也就修改了num2 .但是这并不是说读取这两个值会访问相同的内存空间; 他们内存空间是独立的, 但是值会同步. 此外, 如果只传入一个参数, 那么为arguments[1] 设置的值不会反应到命名参数中. 这是因为**arguments 对象的长度是由传入的参数个数决定, 不是由定义函数时的命名参数的个数决定**.  

ECMAScript 中所有参数传递都是值传递, 不可能通过引用传递参数.  

### 没有重载  
传统意义上的重载: 函数签名不同  
ECMAScript函数没有签名, 其参数是由包含零个或多个值的数组来表示的. 没有函数签名, 真正的重载是不可能做到的.  
可以通过检查传入函数中参数的类型和数量并作出不同的反应, 可以模仿方法的重载.  



  


