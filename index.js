function math (num) {
    let result = num + 5;
    console.log(result);
}
math (4);
math (35);
math (4567);


// задача 1

let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

function moreNumber (arg1, arg2) {
    const result = arg1 > arg2 || arg2 > arg1;
    return result;
}
let result = moreNumber (num1, num2);
console.log(result);


// задача 2

/*let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

function middleMeaning (arg1, arg2) {
    const result = (arg1 + arg2)/2;
    return result;
}
let result = middleMeaning (num1, num2);
console.log(result);*/

// задача 3

/*let numb1 = Number(prompt('Введіть перше число'));
let numb2 = Number(prompt('Введіть друге число'));

function PairNumber (arg1, arg2) {
    const result = arg1 % 2 || arg2 % 2;
    return result;
}
let result = PairNumber (numb1, numb2);
console.log(result);*/