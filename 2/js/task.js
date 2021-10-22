"use strict";
// Задача №1
let count = 85;
if (count <= 100 && count >= 90) {
	console.log("Отлично");
} else if (count <= 89 && count >= 60) {
	console.log("Хорошо");
} else if (count <= 59 && count >= 40) {
	console.log("Удовлетворительно");
} else if (count <=39 && count >=0) {
	console.log("Попробуйте еще раз");
} else {
	console.log("Ошибка ввода");
}
// Задача №2
let i = parseInt(prompt("Введите число"));
let ii = parseInt(prompt("Введите число"));
let iii = prompt("Введите оператор");
switch (iii) {
	case '+':
	    console.log( i + ii);
	     break;
	case '-':
	    console.log( i - ii);
	     break;
    case '*':
        console.log( i * ii);
         break;
    case '/':
        console.log( i / ii);
         break;
     default:
        console.log("Ошибка ввода");
}
// Задача №3
let t = parseInt(prompt("Введите колличество тарелок"));
let m = parseInt(prompt("Введите колличество моющего средства"));
while (t >= 0 && m >= 0) {
	console.log(m);
	t--;
	m -= 0.5;
		if (t === 0) {
	    console.log("Тарелки закончились");
	    console.log(m);
	    break;
	}
    if (m === 0) {
    	console.log("Моющее средство закончилось");
    	console.log(t);
    	break;
    }
}
// Задача №4
 let a;
 let b = Math.floor(Math.random() * 9) + 1; 
 while (a = parseInt(prompt("Введите число от 1 до 9"))) {
      if (b > a) {
      console.log("загаданное число больше");
   } else if (b < a) {
      console.log("загаданное число меньше");
   } else if (b === a) {
      console.log("Вы угадали");
      break;
   }
}
if (a === 0) {
   console.log("выход из программы");
}
// Задача №5
  let num = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
  console.log(num);
  if (num >= 25 && num <= 200) {
    console.log('Число',num,'содержится в интервале (25;200)');
  } else {
    console.log('Число',num,'не содержится в интервале (25;200)');
  }
// Задача №6
  let min = 0;
  let max = 100;
  while (true) {
    if (max == min) {
      console.log("Ваше число ", max);
      break;
    }
    console.log("Число больше или равно",Math.round(max - (( max - min ) / 2)));
    let otvet = prompt("Ответ");
    if (otvet === "да") {
      min = Math.round((max - (max - min) / 2));
    }
    if (otvet === "нет") {
      max = Math.floor((min + (max - min) / 2));
    }
    if (otvet === "стоп") {
      break;
  }
}