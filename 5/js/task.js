"use strict";

// Задача №1

let mass = [3, 90, 5, -100, 50, 0, 560, 1];
function sortMass(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
mass.sort(sortMass);
console.log(mass);

// Задача 2

let someText = (text, ...spamWords) => {
    let count = 0;
    let splitText = text.toLowerCase().split(" ");
    let spam = spamWords.map(item => item.toLowerCase())
    for (let word of splitText) {
        if (!spam.includes(word)) continue
        counter++;
    }
    return Math.ceil(count / splitText.length * 5);
};

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores ipsum dolor ";
console.log(someText(text, "ipsum", "amet", "elit"));









