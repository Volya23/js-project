function math (num) {
    let result = num + 5;
    console.log(result);
}
math (4);
math (35);
math (4567);


// задача 1

/*let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

function moreNumber (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if (num1 === num2) {
        return 'Числ однакові'
    } else {
        return 'Помилка'
    }
    
}

let result = moreNumber (num1, num2);
console.log(result);*/


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

let numb = Number(prompt('Введіть перше число'));

function PairNumber (arg1, arg2) {
    if (numb % 2 === 0) {
        return 'Число парне';
    } else {
        return 'Число непарне';
    }
    
}
let result = PairNumber (numb);
console.log(result);