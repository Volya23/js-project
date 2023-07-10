/*Написати клас Worker.

У працівника є ім'я, прізвище, ставка за робочий день і кількість у цьому місяці.
Крім того, є метод, який повертає заробітню плату цього робітника за поточний місяць =) */

class Worker {
    constructor (name, lastName, rate, count) {
        this.name = name;
        this.lastName = lastName;
        this.rate = rate;
        this.count = count;
    }

    getSalary() {
        return `${this.rate * this.count}`
    }
}

const worker1 = new Worker ('Sara', 'Conar', 2000, 15);
const worker2 = new Worker ('Pall', 'Wokker', 12000, 21);
const worker3 = new Worker ('Bill', 'Croker', 6000, 10);