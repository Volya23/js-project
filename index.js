/*const teacher = {
    name: 'МарьІванна',
    nickname: 'Snowman',
    subject: 'математика',
    teach: function () {
        return 'I am teaching';
    }

}*/
 
/*function Country(name, population, capital, area) {
    this.name = name;
    this.population = population;
    this.capital = capital;
    this.area = area;

    this.getDensity = function() {
        return this.population / this.area;
    }
}
const Ukraine = new Country('Ukraine', 36744636, 'Kyiv', 603628);
console.log(Ukraine.getDensity()); */


/*function greetingUser(user) {
    return `Привіт, ${user.name} ${user.surname}. В наступному році тобі буде ${user.age + 1}`
}

const user = {
    name: 'John',
    surname: 'Doe',
    age: 35
}*/


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
    assistans: 6000,
    marketing: undefined
}

function total(departmentSalary) {
    let sum = 0;
    for(let key in departmentSalary) {
        if (typeof departmentSalary [key] === 'number') {
            sum += departmentSalary [key];
        }
    }
    return sum;
}
console.log(total(departmentSalary));