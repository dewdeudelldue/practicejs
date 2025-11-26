// console.log(new Date());
// console.log('Hello, World!');

// console.error('System error');
// console.warn('This is a warning');
// console.table({ name: 'Zigzak', email: 'dewed@gmail.com' });

// console.group('Grouping');
// console.log(new Date());
// console.log('Hello, World!');
// console.error('System error');
// console.warn('This is a warning');
// console.groupEnd();

// const stylesheet = 'color: white; background-color: blue; padding: 10px; border-radius: 4px;';
// console.log('%cStyled Message Test', stylesheet);
//------------------------------------------------------------------------------
//Ways to declare a variable in JavaScript
// var, let, const
// let firstName = 'John';
// let lastName = 'Doe';
// let age = 30;
// console.log(firstName, lastName, age + ' years  ; Hi Welcome to JavaScript');

// //reassigning variable
// let city;
// city = 'Los Angeles';
// console.log(city);

// if (true) {
//      city = city + ' New York';
//     }
// console.log(city);
    
// const score = 100;
// let newScore = score + 50; // This will cause an error because 'score' is a constant
// console.log(newScore);

// const arr = [10, 20, 30];
// arr.push(40); // This is allowed, as we are modifying the contents of the array, not reassigning it
// console.log(arr);

// arr.pop(10);     // This is also allowed
// console.log(arr);

// arr.shift();     // This is also allowed
// console.log(arr);

// const person = {
//     name: 'Alice',
//     age: 25
// };
// person.age = 26;

// console.log(person);

//declaring multiple variables
// let a = 10, b = 20, c = 30;
// const e = 40, f = 50, g = 60;
// console.log(a + c, b, c + f);

// const object1 = { x: 1, y: 2 };
// console.log(object1.x + object1.y, typeof object1);
// ////// Object Reference Example
// let person1 = {
//     name: 'Bob',
//     age: 28,
// };
// let person2 = person1;

// person2.name = 'dewed';

// console.log(person1);

//Type conversion
//string to number
// let value = '100';
// value = Number(value);
//value = parseInt(value);
//number to string
// let value = 100;
// value = String(value);
// console.log(value,typeof value); // number

// let x;
// x = 5 + '5'; // '55' (string)
// x = Number(x); // 55 (number)
// x = parseInt(x); // 55 (number)
// x = x.toFixed(2).round(0); // '55.00' (string)

// console.log(x, typeof x);

// const str = 'developer';
// let newstring = 'developer';
// newstring = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(newstring);

//math conversions
// let x = 9.2
// x = Math.sqrt(x); // 3
// x = Math.round(x); // 3

// console.log(x);

// let x;
// x = Math.floor(Math.random() * 100 + 1);
// y = Math.floor(Math.random() * 50 + 1);
// let z = x + y;
// let a = y - x;
// let b = x * y;
// let c = x / y;
// let d = x % y;

// console.log(x, y, z, a, b, c, d);

//datetime
let x;
let d = new Date();
x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

console.log(x, typeof x);