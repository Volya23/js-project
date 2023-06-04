// задача 1

let min = 20;

if (min <= 15) {
console.log('перша чверть');
} else if (min > 15 && min <= 30) {
    console.log('друга чверть');
} else if (min > 30 && min <= 45) {
    console.log('третя чверть');
} else if (min > 45 && min <= 60) {
    console.log('четверта чверть');
} else if (min < 0 || min > 60 || typeof min !== 'number') {
    console.log('Трапилась помилка');
}


// задача 2

let num1 = 70;
let num2 = 25;

if (num1 > num2) {
    console.log('перше число більше: ' + num1);
} else if (num2 > num1) {
    console.log('друге число більше: ' + num2);
} else if (num2 === num1) {
    console.log('Числа рівні');
} else {
    console.log('Щось не так');
}

// задача 3

let year = 2023;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + ' - високосний рік');
} else {
    console.log(year + ' - невисокосний рік');
}

// задача 4

let mini = 120;
let max = 2345;
let num = 56;

if (num <= max && num >= mini) {
    console.log('В діапазоні');
} else {
    console.log('Поза діапазоном');
}

// задача 5

let people = 65;
let pen = 100;
let note = 100;

if (pen >= people && note >= people) {
    console.log('Так, буде нагорода');
} else {
    console.log('Ні, нагороди не буде');
}

// задача 6

let age = 58;
let benefit = true;

if (age < 6) {
    console.log('безкоштовний вхід');
} else if (age >= 6 && age <= 12) {
    console.log('10$');
} else if (age > 12 && benefit === false) {
    console.log('20$');
} else if (age > 12 && benefit === true) {
console.log('-50%');
}