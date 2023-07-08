/* (rest)

Напишіть функцію, яка приймає масив і сумує всі числа в цьому масиві (reduce).
Функція має бути стрілкова */


const arrowFun = (...rest) => rest.reduce ((total, amount) => total + amount);


/*(spread)

Є 2 масиви:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 11, 12, 13, 14, 15];

Задача:
Зклейте два масиви в один, не використовуючи concat */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 11, 12, 13, 14, 15];
const arr = [... arr1, ... arr2];