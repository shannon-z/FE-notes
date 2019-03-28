```JavaScript
function A(name, age){
    this.name = name;
    this.age = age;
}
A.prototype.getInfo = function(){
    console.log(`name:${this.name}--age:${this.age}`);
}

function B(name, age, gender){
    A.call(this, name, age);
    this.gender = gender;
}


B.prototype = Object.create(A.prototype);
// B.prototype = Object.create(A);
// var a = new A();
// B.prototype = Object.create(a);


B.prototype.constructor = B;
B.prototype.getInfo = function(){
    console.log(`name: ${this.name}--age: ${this.age}--gender: ${this.gender}`);
}

{
    Object.create = function(proto){
        function F(){}
        F.prototype = proto;
        return new F();
    }
}

```


[js继承实现之Object.create](https://segmentfault.com/a/1190000014592412)  
[js学习日记-new Object和Object.create到底干了啥](https://www.cnblogs.com/94pm/p/9113434.html)