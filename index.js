let password = 'qwerty123';

//варіант 1

/*let userpassword = prompt ('Введіть свій пароль')
while (userpassword != password) {
    userpassword = prompt ('Невірний пароль! Введіть ще раз!')
}*/

 // варіант 2

 while (true) {
    let userpass = prompt ('Введіть свій пароль');
    if (userpass === password) {
        break;
    }
 }
 