"use strict";

// Задание 1
let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
}
function generateField(n){ 
    if(n < 3) return; 
    let table = document.createElement("table"); 
    table.style.backgroundColor = "black";
    for (let i = 0; i < n; i++){ 
        let row = table.insertRow(i); 
        for (let i = 0; i < n; i++) { 
            let cell = row.insertCell(i); 
            cell.style.backgroundColor = "white";
            cell.style.height = `${n}rem`;
            cell.style.width = `${n}rem`;
            cell.classList.add("field-td");
        }
    }
    document.body.append(table);
    let getRandom = (arr) => Math.floor(Math.random() * ((arr.length - 1) + 1));
    let cells = document.querySelectorAll(".field-td");
    for (let i = 0; i < 3; i++) {
       cells[getRandom(Array.from(cells))].setAttribute("prise", Object.values(prises)[getRandom(Object.values(prises))]);
    }
}
generateField(4);

let table = document.querySelector("table");

table.addEventListener('mouseover', function(){
    alert("У вас есть 3 попытки, чтобы найти приз");
}, {once: true});
console.log(table);

table.addEventListener('click', isPrise);
let attempt = 0;
function isPrise(event){
    let clickElem = event.target;
    attempt++;
    if (attempt > 3) {
        alert ("Вы не нашли приз. Игра окончена.");
        this.removeEventListener('click', isPrise)
        return
    }
    if (clickElem.hasAttribute("prise")) {
        alert (`Ваш выигрыш - ${clickElem.getAttribute("prise")}`);
        this.removeEventListener('click', isPrise)
    } else {
        alert(`Количество попыток: ${3-attempt}.`);
    }
}

