const isAuth = (false);
const viewMode = isAuth ? 'autAuth' : 'unAuth';
console.log(viewMode);

// вправа switch.case

const menu = prompt('Оберіть варіант: \n 1 - Сік, \n 2 - Вода, \n 3 - Кава, \n 4 - Чай, \n 5 - Лимонад');

switch (menu) {
    case '1': {
        console.log('Сік');
        break;
    }
    case '2': {
        console.log('Вода');
        break;
    }
    case '3': {
        console.log('Кава');
        break;
    }
    case '4': {
        console.log('Чай');
        break;
    }
    case '5': {
        console.log('Лимонад');
        break;
    }
    default: {
        console.log('Введіть число від 1 до 5');
    }
        break;
}

// вправа HOF

function washingFace() {
    // ............
    console.log('Washing the face');
  }
  
  function brushingTeeth() {
    // ............
    console.log('Brushing teeth');
  }
  
  function skincare() { // догляд за шкірою
    // ............
    console.log('Skincare');
  }
  
  function cooking() {
    // ............
    console.log('Cooking');
  }
  
  function sleep() {
    // ............
    console.log('Sleep');
  }
  
  function breakfast() {
    // ............
    console.log('Breakfast');
  }
  
  function education() {
    // ............
    console.log('Education');
  }
  
  function lunch() { // Обід
    // ............
    console.log('Lunch');
  }
  
  function dinner() {
    // ............
    console.log('Dinner');
  }
  
  function walk() { // Прогулянка
    // ............
    console.log('Walk');
  }
  
  function shower() {
    // ............
    console.log('Shower');
  }
  
  function todo(timeOfDay) { // Higher-order function
    switch(timeOfDay) {

      case 'morning': {

        console.log('>>>...MONING...<<<');
  
        washingFace();
        brushingTeeth();
        skincare();
        breakfast();
  
        break;
      }
      case 'lunch': {
        
        console.log('>>>...LUNCH...<<<');
  
        education();
        lunch();
        cooking();
        walk();
  
        break;
      }
      case 'evening': {

        console.log('>>>...EVENING...<<<');
  
        education();
        dinner();
        walk();
        shower();
        brushingTeeth();
        washingFace();
        skincare();
        sleep();
  
        break;
      }
      default: {
        console.log('Error! Enter a valid time of day!');
      } 
    }
  }
  
  todo('morning');
  todo('lunch');
  //todo('evening');