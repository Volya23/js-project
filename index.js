/*Задача: створити функцію-конструктор для сходів.

Об'єкт має властивість:
currentStair // сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи (прототип):
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось */

function MyStairs() {
    this.currentStair = 0;
}
MyStairs.prototype = new MyStairProto();

function MyStairProto() {
    
    this.up = function () {
            this.currentStair++;
        }
    
    this.down = function () {
        if (this.currentStair > 0) {
            this.currentStair--;
        }
    }
   
    this.showStair = function () {
        return this.currentStair;
        }
    }

    const ld = new MyStairs ();




