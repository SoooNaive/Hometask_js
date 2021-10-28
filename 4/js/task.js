"use strict";
// Задача №1
function productFsorm(count) {
   if (count % 10 === 1) return "Товар";
   if (count % 10 > 1 && count % 10 < 5) return "Товара";
   return "Товаров";
}
console.log(productFsorm(67));

// Задача №2
let min = parseInt(prompt("Введите минимум"));
let max = parseInt(prompt("Введите максимум"));
let step = parseInt(prompt("Введите шаг"));
function range (min, max, step = 1) {
   let arr = [];
   for (let value = min; value < max; value += step) {
   arr.push(value);  
}
return arr;
}
console.log(range(min, max, step));

// Задание №3

// Первый вопрос - Как проверить значение на определенный тип данный?
// Можно проверить через typeof
typeof 0 // число
typeof 1n // целые числа произвольной длинны
typeof "foo" // строка
typeof true // логический тип
typeof null // специальное значение
typeof undefined // undefined

// Как проверить, что значение переменной было присвоено?
let test;
if (test === undefined) {
   // Например так
}

// Как проверить значение на число?
if (typeof test  === "number") {
    // Например
}







