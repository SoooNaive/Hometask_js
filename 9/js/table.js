"use strict";

let articles = [
     {
         id: 1,
         title: "JS",
         text: "About JS",
         author: "Max"
     },
     {
         id: 2,
         title: "PHP",
         text: "About PHP",
         author: "Ivan"
     },
     {
         id: 3,
         title: "DataBase",
         text: "About DB",
         author: "Paul"
     },
     {
         id: 4,
         title: "HTML",
         text: "About HTML",
         author: "Paul"
     }
 ];

 let goods = [
     {
         title: "Piano",
         price: 3000,
         count: 25
     },
     {
         title: "Guitar",
         price: 1200,
         count: 40
     },
     {
         title: "Drum",
         price: 2700,
         count: 12
     },
     {
         title: "Flute",
         price: 900,
         count: 50
     },
     {
         title: "Harp",
         price: 3400,
         count: 5
     }
 ];

function generateTable(arr) {
    let tableId = document.getElementById("table");
    let table = document.createElement("table");
    table.classList.add("table");
    let heading = table.insertRow();
    heading.classList.add("heading");

    for (let elem in arr[0]) {
        let tableHead = heading.insertCell();
        tableHead.innerText = elem;
        tableHead.classList.add("table-head");
    }

    for (let element of arr) {
        let row = table.insertRow();
        row.classList.add("table-row");

        for (let elem in element) {
            let tableRow = row.insertCell();
            tableRow.innerText = element[elem];
            tableRow.classList.add("table-row-cell");
        }
    }

    tableId.append(table);
}

generateTable(articles);
generateTable(goods);

 