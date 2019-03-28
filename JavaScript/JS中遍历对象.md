### Object.getOwnPropertyNames()  
Object.getOwnPropertyNames方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。  
```javascript
Object.getOwnPropertyNames(Date)
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]
```  
### Object.keys()  
对象本身的属性之中，有的是可以遍历的（enumerable），有的是不可以遍历的。Object.getOwnPropertyNames方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用Object.keys方法。  
```javascript
Object.keys(Date)
// []
```  

### Object.prototype.hasOwnProperty()  
对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。  
```javascript
Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false
```  
另外，hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法  

### in 运算符和for...in  
in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。  
```javascript
'length' in Date // true
'toString' in Date // true
```  
in运算符常用于检查一个属性是否存在。  

获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。

```javascript
var o1 = { p1: 123 };

var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});

for (p in o2) {
  console.info(p);
}
// p2
// p1
```

---
为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。  

```javascript
for(var item in object){
    if(Object.hasOwnProperty(item)){
        ...
    }
}
``` 
---  
获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
```javascript
function inheritedPropertyNames(obj) {
  var props = {};
  while(obj) {
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = true;
    });
    obj = Object.getPrototypeOf(obj);
  }
  return Object.getOwnPropertyNames(props);
}
```
(上面代码依次获取obj对象的每一级原型对象“自身”的属性，从而获取obj对象的“所有”属性，不管是否可遍历。)  

