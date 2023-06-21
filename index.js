//(sort)

//Створіть масив чисел. Відсортуйте його у порядку зростання / спадання

const array = [5, 9, 7, 45, 16];
    array.sort (function (a, b) {
        return a - b;
    });
    console.log(array);

    array.sort (function (a, b) {
        return b - a;
    });
    console.log(array);


//(filter)

//Створити новий масив, в який увійдуть тільки парні елементи початкового масиву

const array1 = [3, 8, 67, 23, 6];
    function pairNum (num) {
        if (num % 2 === 0) {
            return true
        } else {
            return false
        }
    }
console.log(array1.filter(pairNum));


//(reduce)

//У вас є масив чисел. * Знайдіть суму елементів масиву. ** Знайдіть суму тільки парних елементів масиву

// *
const array2 = [5, 90, 76, 4, 9, 4];
    function red(a, b) {
        return a + b
    };
    
const sum = array2.reduce(red, 0);
console.log(sum);
   
// **

const array21 = [5, 90, 76, 4, 9, 4];
        const tr1 = array21.reduce ((sum, key) => {
            if (key %2 === 0) {
                sum += key;
            }
            return sum;
        }, 0);
        console.log(tr1);


