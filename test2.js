// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         writable: true,
//         value: 2018
//     },
//     edition: {
//         writable: true,
//         value: 1
//     },
//     year: {
//         get: function(){
//             return this._year;
//         },
//         set: function(newValue){
//             if(newValue > this._year){
//                 this.edition += newValue - this._year;
//                 this._year = newValue;
//             }
//         }
//     }
// });
// book.year = 2019;
// console.log(book._year, book.edition);

// book.year = 2020;
// console.log(book._year, book.edition);

// var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
// console.log(descriptor.configurable);
// console.log(descriptor.value);


// function Person(){}

// Person.prototype.name = 'shannon';
// Person.prototype.age = 29;
// Person.prototype.job = 'engeneer';
// Person.prototype.sayName = function(){
//     console.log(this.name);
// }
// Person.prototype = {
//     constructor: lala,
//     name: 'shannon',
//     age: 29,
//     job: 'engeneer',
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// function lala(){}

// let person1 = new Person();

// person1.sayName();  
// console.log(person1);

// console.log(Person.prototype === person1.__proto__);
// console.log(Person.prototype.isPrototypeOf(person1));
// console.log(Object.getPrototypeOf(person1) === Person.prototype);
// console.log(Object.getPrototypeOf(person1).age);

// let key = Object.keys(Person.prototype);
// console.log(key);

// let key2 = Object.getOwnPropertyNames(Person.prototype);
// console.log(key2);


// person1.name = 'hello';


// let key3 = Object.keys(String.__proto__);
// console.log(key3);

// let key4 = Object.getOwnPropertyNames(String.__proto__);
// console.log(key4);

// let key5 = Object.getOwnPropertyNames(Function.prototype);
// console.log(key5);

// console.log(String instanceof Object);

// console.log(String.__proto__ === Function.prototype);

// console.log(Function.prototype === Object.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log('--------');
// console.log(Function.__proto__ === Function.prototype)


// console.log(String.prototype);

// console.log('1234567890'.slice(1,2));


// function superType(){
//     this.property = true;
// }

// console.log(superType.name);
// console.log(Object.getOwnPropertyNames(superType));
// console.log(superType.__proto__ === Function.prototype)

// superType.prototype.getSuperValue = function (){
//     return this.property;
// }

// function subType(){
//     this.subProperty = false;
// }



// subType.prototype = new superType();

// // subType.prototype.getSubValue = function (){
// //     return this.subProperty;
// // }

// var instance = new subType();
// // console.log(instance.getSuperValue());
// // console.log(instance.getSubValue());
// console.log(instance.__proto__.property);


function superType(name){
    this.name = name;
}

var person = {
    name: 'shannon',
    arr: [1,2,3,4]
}

var anotherPerson = Object.create(person, {
    names: {
        value: 'kannon'
    }
});


console.log(anotherPerson.name);

console.log('=====================');

console.log(Object.getOwnPropertyNames(anotherPerson.__proto__));

// anotherPerson.name = 'Lennon';
anotherPerson.arr.push(1);

console.log(anotherPerson.arr);
console.log(anotherPerson.name);

console.log(Object.getOwnPropertyNames(anotherPerson.__proto__));

console.log(Object.getOwnPropertyNames(anotherPerson));
