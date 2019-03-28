对任何数据类型调用Boolean() 函数, 总会返回一个Boolean 值. 至于返回的值是true 还是false, 取决于要转换值的数据类型及实际值.( 在条件判断时, 自动执行相应的Boolean 转换 )  

数据类型|转换为true 的值|准换为false 的值
--|:--:|:--
Boolean|true|false
String|任何非空字符串|""( 空字符串 )
Number|任何非零数字( 包括无穷大 )|0和NaN
Object|任何对象|null
Undefined|-|undefined  

### NaN  
任何涉及NaN 的操作( NaN/10 ) 都会返回NaN, 此外, NaN 与任何值都不相等, 包括NaN 本身.  


### == 比较
首先比较的是两边的类型, 如果类型相同则直接比较内容, 内容相同则返回true, 反之返回false .  
如果类型不相同, null == undefined,null == null, undefined == undefined, 其他情况比较之中包含null或undefined 的都返回false .  
如果一边是number 另一边必然转成number 类型.  
如果一边是boolean 首先将其转成number 类型, 另一边必然还是转成number 类型.  
```JavaScript
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true
```

```JavaScript
new Number('') //0
+'' //0
+'false' //NaN
+' \t\n\r' //0
```

