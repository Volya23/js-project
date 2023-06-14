// task 1

/*const user = {
    name: 'Grisha',
    surname: 'Pupkin',
    age: 16,
    'favorite book': 'A Little Prince',
    pet: 'hamster'
}

function tic(user) {
    for(let key in user) {
    console.log(`"${key}": *${user[key]}*`);
}

}*/

//task 2

const departmentSalary = {
    HR: 20000,
    development: 100000000,
    drivers: 3000,
    assistans: 10000,
    marketing: undefined
}

function total(departmentSalary) {
    let sum = 0;

    for(let key in departmentSalary) {
        if (typeof departmentSalary [key] === 'number') {
            sum = sum + departmentSalary [key];
        }
    }
    return sum;
}
console.log(total(departmentSalary));