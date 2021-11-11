"use strict";

  let goods = { 
     piano: { 
        title: "Пианино", 
        price: 3000, 
        count: 25 
     }, 
     guitar: { 
        title: "Гитара", 
        price: 1200, 
        count: 40 
     },
     drum: { 
        title: "Барабаны", 
        price: 2700, 
        count: 12 
     }, 
     flute: { 
        title: "Флейта", 
        price: 900, 
        count: 50 }, 
     harp: { 
        title: "Арфа", 
        price: 3400, 
        count: 5 
     } 
  };

// Задача №1

 let getTask1 = (obj, from, to) => {
     if (typeof obj !== 'object' || typeof from !== "number" || typeof to !== "number") return false;
     let newObj = {};
     for (let elem in obj) {
        if (obj[elem].price >= from && obj[elem].price < to) newObj[elem] = obj[elem];
     }
     return newObj;
 }
 console.log(getTask1(goods, 1000, 3000));

// Задача №2
let getTask2 = (obj, title, countToCart) => {
    if (typeof obj !== 'object' || typeof title !== "string" || typeof countToCart !== "number") return false;
    if (obj[title]['count'] - countToCart < 0) {
        console.log("Количесво не позволяет");
        return false;
    }
    obj[title]['count'] -= countToCart;
    return true;
};

console.log(getTask2(goods, "harp", 2));

// Задача №3

let books = [
     { author: 'Пушкин', title: 'Пир во время чумы'}, 
     { author: 'Толстой', title: 'Война и мир'}, 
     { author: 'Лермонтов', title: 'Тамань'}, 
     { author: 'Гончаров', title: 'Обломов'}, 
     { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
     { author: 'Пушкин', title: 'Руслан и Людмила'}, 
     { author: 'Лермонтов', title: 'И скучно, и грустно'},
  ];


function getTask3 (obj, autor) {
let newBooks = [];
for (let book of obj) {
  if (book.author === autor) {
    newBooks.push(book)
  }
}
return newBooks;
}
console.log(getTask3(books, 'Пушкин'));










