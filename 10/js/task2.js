"use strict";
// Задание 2
let images = [
    'https://picsum.photos/1000/1000?random=1',
    'https://picsum.photos/1000/1000?random=2',
    'https://picsum.photos/1000/1000?random=3',
];
let itemTitles = document.querySelectorAll('.item_title');
for (let i = 0; i < itemTitles.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', images[i]);
    console.log(img);
    img.classList.add('item__image');
    itemTitles[i].after(img);
}

let prices = Array.from(document.querySelectorAll('.item__price'));
prices.forEach((span) => (span.innerText /= 2));

let goods = {
    piano: {
        title: 'Пианино',
        price: 3000,
        count: 0,
        img: 'https://picsum.photos/id/345/1000',
    },
    guitar: {
        title: 'Гитара',
        price: 1200,
        count: 40,
        img: 'https://picsum.photos/id/988/1000',
    },
    drum: {
        title: 'Барабаны',
        price: 2700,
        count: 12,
        img: 'https://picsum.photos/id/123/1000',
    },
    flute: {
        title: 'Флейта',
        price: 900,
        count: 0,
        img: 'https://picsum.photos/id/162/1000',
    },
    harp: {
        title: 'Арфа',
        price: 3400,
        count: 5,
        img: 'https://picsum.photos/id/163/1000',
    },
};

let cardSection = document.querySelector('.cards-section');
Object.values(goods).forEach((elem) => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');

    let cardTitle = document.createElement('h2');
    cardTitle.innerText = elem.title;

    let cardImage = document.createElement('img');
    cardImage.classList.add('card__image');
    cardImage.setAttribute('src', elem.img);

    let cardPrice = document.createElement('p');
    cardPrice.innerText = `${elem.price} руб.`;

    let cardCount = document.createElement('div');
    cardCount.classList.add('card__count-info');
    if (elem.count) {
        cardCount.innerHTML = `
            <button>-</button>
            <span class="count">${elem.count}</span>
            <button>+</button>
            `;
    } else {
        cardCount.innerHTML = '<span>Товар закончился</span>';
    }

    divCard.append(cardTitle, cardImage, cardPrice, cardCount);
    cardSection.append(divCard);
});

let cards = document.querySelectorAll('card');
let counts = document.querySelectorAll('.count');
let max = [];
for (let i = 0; i < counts.length; i++) {
    max.push(counts[i].innerHTML);
    counts[i].nextElementSibling.addEventListener('click', function () {
        if (counts[i].innerText !== max[i]) {
            counts[i].innerText = +counts[i].innerText + 1;
        }
    });

    counts[i].previousElementSibling.addEventListener('click', function () {
        if (+counts[i].innerText) {
            counts[i].innerText = +counts[i].innerText - 1;
        }
    });
}