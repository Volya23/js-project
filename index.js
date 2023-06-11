// let password = 'qwerty123';

//варіант 1

/*let userpassword = prompt ('Введіть свій пароль')
while (userpassword != password) {
    userpassword = prompt ('Невірний пароль! Введіть ще раз!')
}*/

 // варіант 2

 /* while (true) {
    let userpass = prompt ('Введіть свій пароль');
    if (userpass === password) {
        break;
    }
 } */

function factorial (number) {
    if (number < 0) {
        return null;
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *=1;
    }
    return result;
}

 