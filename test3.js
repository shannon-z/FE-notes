// function sayHi(name, message){
//     console.log("hello" + name + message);
// }

// function sayHi(){
//     console.log('hi ' + arguments[0] + arguments[1]);
// }

// sayHi('sa', ' love you');


// console.log(a); // ReferenceError  a is not defined
// +function a(){ console.log(1);


// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a : 10,
//     foo : foo
// }
// var a = 1;
// foo();                // ?

// obj.foo();            // ?


// function foo(){
//     console.log(this.a);
// }
// var obj = { a : 10 };

// foo = foo.bind(obj);
// foo();                    // 10
// console.log(foo)



// function foo(){
//     this.a = 10;
//     console.log(this);
// }
// foo();                    // window对象
// console.log(window.a);    // 10   默认绑定

// var obj = new foo();      // foo{ a : 10 }  创建的新对象的默认名为函数名
//                           // 然后等价于 foo { a : 10 };  var obj = foo;
// console.log(obj.a);       // 10    new绑定


// function foo(){
//     this.a = 10;
//     return new Number(1);
// }
// var obj = new foo();
// console.log(obj.a);       // undefined
// console.log(obj.toString());         // "捣蛋鬼"



// var x = 10;
// var obj = {
//     x: 20,
//     f: function(){
//         console.log(this);        // ?
//         var foo = function(){ 
//             console.log(this);    
//             }
//         foo();                      // ?
//     }
// };
// obj.f();


// function Foo() {
//     console.log(this);
//     return this;
// }

// new Foo.Foo();


// function Animal(name){
//     this.name = name;
//   }
//   Animal.color = "black";
//   Animal.prototype.say = function(){
//     console.log("I'm " +this.name);
//   };
//   var cat = new Animal("cat");
  
//   console.log(
//     cat.name, //cat
//     cat.color //undefined
//   );
//   cat.say(); //I'm cat
  
//   console.log(
//     Animal.name, //Animal
//     Animal.color //back
  // );
//   Animal.say(); //Animal.say is not a function
// console.log(Animal);
// console.log(Animal.name, Animal.color);
// Animal.prototype.say();

// console.log(Animal instanceof Function);


// function Bar() {
//   console.log(this);
//   return new Number(2);
// }
// var bar = new Bar(); // a new object
// console.log(bar);

// function Test() {
//   this.value = 2;

//   return {
//       foo: 1
//   };
// }
// console.log(new Test()); // the returned object


// function Bar() {
//   var value = 2;
//   return {
//       method: function() {
//           return value;
//       }
//   }
// }
// Bar.prototype = {
//   method: function() { return 1;}
// };

// var bar1 = new Bar();
// var bar2 = Bar();
// console.log(bar1.method());
// console.log(bar2.method());

// console.log(typeof false.valueOf());
// console.log(typeof false.toString());
// console.log(false instanceof Boolean);
// // console.log(null.valueOf());
// var a = new String(null);
// console.log(a.valueOf());
// console.log(String());

// //例子一
// var example = {test:'123'};
// console.log(112+example);// NaN

// //例子二 同时改写 toString 和 valueOf 方法
// var example = {
//     toString:function(){
//         return '23';
//     },
//     valueOf:function(){
//         return '32';
//     }
// };
// console.log(112+example);// 32

// //例子三 只改写 toString 方法
// var example = {
//     toString:function(){
//         return '23';
//     }
// };
// console.log(112+example);// 23

// //例子一
// var example = {test:'123'};
// console.log(example.valueOf().toString());



// alert('ss'+example);// "[object Object]"

// //例子二 同时改写 toString 和 valueOf 方法
// var example = {
//     toString:function(){
//         return '23';
//     },
//     valueOf:function(){
//         return '32';
//     }
// };
// alert('ss'+example);// "23"

// //例子三 只改写 valueOf 方法
// var example = {
//     valueOf:function(){
//         return '32';
//     }
// };
// alert('ss'+example);// "[object Object]"

// var d = {test:'123',example:123};
// console.log(typeof d.valueOf());
// console.log(2.toString()); // raises SyntaxError
// console.log(2..toString()); // the second point is correctly recognized
// console.log(2 .toString()); // note the space left to the dot
// console.log((2).toString()); // 2 is evaluated first


// function Foo() {
//   this.value = 42;
// }
// // Foo.prototype = {
// //   method: function() {}
// // };

// var foo = new Foo();
// console.log(Foo.prototype);

// let arr = [0,1,2,3,4,5,12];
// console.log(arr.sort(function(a, b){
//   return a-b;
// }));