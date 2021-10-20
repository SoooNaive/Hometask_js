"use strict";
// Площадь прямоугольного параллелепипеда
let a = 7;
let b = 12;
let c = 10;
let result = 2 * ( a * b + b * c + a * c );
console.log(result);

// Сумма цифр числа n
let n = 86;
let first = n % 10;
let second = ( n - first ) / 10;
let sum = first + second;
console.log(sum);

// Смена значений двух переменных
let d = 5;
let e = 8;
d = d + e;
e = d - e;
d = d - e;
console.log(d, e);