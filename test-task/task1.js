"use strict";

// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
// если строка является палиндромом, и false — если нет. 
// При этом нужно учитывать пробелы и знаки препинания.
let checkPolind = str => {
	str = str.toLowerCase();
	return str === str.split('').reverse().join('');
}
console.log(checkPolind('qwerewqq'));



// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, 
// с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

let fizzBuzz = n => {
	for(let i = 1; i <= n; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		}
		if(i % 3 === 0) {
			console.log('fizz');
		}
		if(i % 5 === 0) {
			console.log('buzz');
		}
		else {
			console.log(i);
		}
	}
};

fizzBuzz(5);
