"use strict";

//Задача №1

let loginCity = new Map();

loginCity.set('Jane', 'New-York')
         .set('Jade', 'San Francisco')
         .set('Mark', 'Odessa')
         .set('Paul', 'Moskow')
         .set('Ron', 'Paris');

function getMass(map, city) {
    let login = [];
    for (let elem of map.entries()) {
        if (elem[1].toLowerCase() === city.toLowerCase()) login.push(elem[0]);
    }
    return login;
}

console.log(getMass(loginCity, "San Francisco"));

//Задача №2

let mass = ['Paris', 'Paris', 90, 'Mark','Cat','Jane','Mark','Jane'];

function getWord(mass) {
    let word = new Map();
    for (let item of mass) {
        if (word.has(item)) {
            word.set(item, word.get(item) + 1);
           } else {
            word.set(item, 1);
        }
    }
    return word;
}

console.log(getWord(mass));

//Задача №3

let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function getMap(map, from, to) {
    let newMap = new Map();
    for (let elem of map.entries()) {
        if (elem[1].age >= from && elem[1].age < to) newMap.set(elem[0], elem[1]);
    }
    return newMap;
}

console.log(getMap(customerMap, 34, 70));