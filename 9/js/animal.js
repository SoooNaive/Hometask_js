"use strict";

let animals = [
    {
        name: 'Люся',
        age: '1 год',
        color: 'трехцветная',
        additional_info: { vaccinations: true, passport: true },
    },
    {
        name: 'Том',
        age: '3 месяца',
        color: 'белый',
        additional_info: { vaccinations: false, passport: false },
    },
    {
        name: 'Макс',
        age: 2,
        color: 'серый',
        additional_info: { vaccinations: false, passport: true },
    },
    {
        name: 'Василий',
        age: 3,
        color: 'черный',
        additional_info: { vaccinations: true, passport: true },
    },
];

let main = document.querySelector('.main');

animals.forEach((element) => {

    let info = document.createElement('div');
    info.classList.add('info');

    let name = document.createElement('p');
    name.innerText = `Имя: ${element.name}`;

    let age = document.createElement('p');
    age.innerText = `Возраст: ${element.age}`;
    let color = document.createElement('p');
    color.innerText = `Окрас: ${element.color}`;

    let vaccinations = document.createElement('p');

    if (element.additional_info.vaccinations) {
        vaccinations.innerText = `Прививка: есть`;
    } else {
        vaccinations.innerText = `Прививка: нет`;
    }

    let passport = document.createElement('p');
    if (element.additional_info.passport) {
        passport.innerText = `Паспорт: есть`;
    } else {
        passport.innerText = `Паспорт: нет`;
    }
    
    info.append(name, age, color, vaccinations, passport);
    main.append(info);
});