"use strict";
// Задача №1
let count = 0;
let sum = 0;
let summ = 0;
let nums = [
     [23, 56, 75, -90, 123],
     [17, 0, -6429, -122],
     [19, 86, 55, -3, 900, 0, 0],
     [4, 9, -2]
  ];
for ( let i = 0; i < nums.length; i++) {
  for ( let j = 0; j < nums[i].length; j++) {
    nums[i][j]  = nums[i][j] + 10;
    sum += nums[i][j];
    count++;
    summ = sum / count;
  }
}
     console.log(nums);
     console.log(summ);

// Задача №2
   let array = [];
   let max = [0], min = [301];
   for (let i = 0; i < 7; i++) {
      array[i] = Math.floor(Math.random() * (300 - 5 )) + 5;
      if (array[i] > max[0]) {
       max[0] = array[i];
       max[1] = i;
      }
      if (array[i] < min[0]) {
          min[0] = array[i];
          min[1] = i;
      }
   }
   console.log(array);
   array[max[1]] = min[0];
   array[min[1]] = max[0];
   console.log(array);

// Задача №3
   let arr = [];
   let newArr = [];
   for (let i = 0; i < 10; i++) {
      arr[i] = Math.floor(Math.random() * (100 + 100 )) - 100;
   }
   console.log(arr);
   for (let i = 0; i < 10; i++) {
      if (arr[i] < 0) {
         newArr.push(arr[i]);
         arr.splice(i, 1);
         i--;
      }  
   }
   console.log(arr);
   console.log(newArr);

   // Задача №4
   let mass = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
   let log;
   do {
      log = prompt("Введите логин");
   } while (mass.includes(log) != true);
  console.log('Вы ввели логин из массива');

  // Задача №5
   let massLog = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
   let login;
   login = prompt("Введите логин");
   while (massLog.includes(login) == true) {
      console.log('Этот логин уже существует');
      login = prompt("Введите логин");
   }
      massLog.push(login);
      console.log('Новый логин создан')
      console.log(massLog);
  

