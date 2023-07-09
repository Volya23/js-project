/* Написати функцію truncate, яка приймає в якості аргументів рядок (str) і довжину (strLength).

Якщо довжина > strLength, то врізати рядок до цієї довжини і в кінці додати "...".

Якщо рядок менший, то нічого не робити.

Приклади роботи функції:

truncate('hello', 2); // 'he...'
truncate('hello', 10); // 'hello'
*/

function truncate (str, strLength) {
    if (str.length <= strLength) {
        return str;
    }
    
    const word = str.slice (0, strLength);
    return word + '...';
}


/*Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra', інакше 'false'

Приклади роботи функції:

checkSpam('buy ViAgRa now'); // true
checkSpam('free xxxxxx'); // true
checkSpam('innocent rabbit'); // false */

function checkSpam(rule) {
    const letter = rule.toLowerCase();
    return letter.includes ('xxx') || letter.includes ('viagra'); 
    
}


/*Написати функію, яка перевіряє, чи є переданий рядок паліндромом. При тому, функція має працювати таким чином, що вона не повинна зважати на регістр.

Довідка.
Паліндром - це коли рядок з обох сторін читається однаково.

Приклади.
'Anna' - паліндром
'Mama' - не паліндром
'Namman' - паліндром
'2002' - паліндром */

    function palindrom (list) {
        return list.toLowerCase().split('').reverse().join('') === list.toLowerCase();
    }