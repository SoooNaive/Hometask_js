"use strict";

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};


function generateField(n) {
    if (n < 3) {
        return;
    }
    let elem = [];
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * n * n);
        if (elem.includes(rand)) continue;
        elem.push(rand);
    }
    let field = document.getElementById("field");
    field.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let prisesMas = Object.keys(prises);
    let element = 0;
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        field.append(cell);
        if (elem.includes(i)) cell.setAttribute("prise", prisesMas[element++]);
    }
}

generateField(6);