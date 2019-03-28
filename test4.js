// function Foo() {
//     return this;
// }
// Foo.getName = function () {
//     console.log('1');
// };
// Foo.prototype.getName = function () {
//     console.log('2');
// };

// var foo = new Foo.getName();   // -> 1
// new Foo().getName(); // -> 2


// const test = () => {
//     console.log(this);
// }

// test('shannon');


// const test = name => {
//     console.log(name);
// }

// test('shannon');


// const test = name => {
//     console.log(name);
// }

// test('shannon');


// const test = (n1, n2) => n1 + n2

// let sum = test(1, 2);
// console.log(sum);

// const obj = {
//     a: () => {
//         console.log(this)
//     }
// }
// obj.a.call(obj)  //打出来的结果依然是window对象


// const obj = {
//     a: function() {
//         console.log(this)
//         window.setTimeout(function(){ 
//             console.log(this) 
//         }, 1000)
//     }
// }
// obj.a.call(obj)  //第一个this是obj对象，第二个this还是obj对象


// var arr = ['old', 1, true, null, undefined];

// var new_arr = arr.concat();

// new_arr[0] = 'new';

// console.log(arr) // ["old", 1, true, null, undefined]
// console.log(new_arr) // ["new", 1, true, null, undefined]

// function unique(arr){

//     return [...new Set(arr)]
// }

// function unique(arr){
//     let temp = [];
//     for(let i = 0; i < arr.length; i++){
//         if(temp.indexOf(arr[i]) === -1){
//             temp.push(arr[i]);
//         }
//     }
//     return temp;
// }

// console.log(unique([1,2,3,4,1]));

// console.log(unique([1,2,3,4,1]));

var str = '[1,[2,[3,4,[],6,["b"]]]]';
var arr = str.split(/,|[]/);
console.log(arr);