//Дано масив об'єктів. Задача. Створити новий масив користувачів, об'єкти мають бути у такому вигляді:
/*{
    fullname: 'John Doe',
    age: ....,
    email: .....
}*/

const users = [
{
name: 'John',
lastName: 'Doe',
age: 18,
email: 'meil@com'
},
{
name: 'Jane',
lastName: 'Doe',
age: 20,
email: 'meil@com'
},
{
name: 'Josh',
lastName: 'Doe',
age: 17,
email: 'meil@com'
},
{
name: 'Jake',
lastName: 'Doe',
age: 21,
email: 'meil@com'
},
{
name: 'Jackson',
lastName: 'Doe',
age: 17,
email: 'meil@com'
},
]

function fullName(user) {
    return {
        fullName: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email,
    }
}

const newUsers = users.map ((item) => {
    return fullName (item);
});

  
// task 2

/*Дано масив об'єктів. Задача. Створити новий масив користувачів. У новий масив мають потрапити тільки повнолітні користувачі. Об'єкти, при цьому, мають бути у такому вигляді:
{
    fullname: 'John Doe',
    email: .....
} */

const usersi = [
{
name: 'John',
lastName: 'Doe',
age: 18,
email: 'meil@com'
},
{
name: 'Jane',
lastName: 'Doe',
age: 20,
email: 'meil@com'
},
{
name: 'Josh',
lastName: 'Doe',
age: 17,
email: 'meil@com'
},
{
name: 'Jake',
lastName: 'Doe',
age: 21,
email: 'meil@com'
},
{
name: 'Jackson',
lastName: 'Doe',
age: 17,
email: 'meil@com'
},
]

function adult (useri) {
    if (useri.age >= 18) {
        return {
        fullName: `${useri.name} ${useri.lastName}`,
        email: useri.email,
    }
    }
    
}

const newUsersi = usersi.map ((item) => {
    return adult (item);
});


// task 3

// Дано масив об'єктів. Створити новий масив, який складається тільки з імен котів

const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },

];

function name(cats) {
    return {
        name: `${cats.name}`,
    }
}

const newcats = catArray.map ((item) => {
    return name (item);
});