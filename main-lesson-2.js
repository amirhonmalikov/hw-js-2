//задание №1

let userName = prompt('Введите ваше имя');
console.log('Меня зовут ' + userName);  

let age = +prompt('Введите свой возраст');

if(age < 18) {
    alert('Вы еще молоды. ' + 'Вам  нужно учиться!!!');
}else if(age < 50) {
    alert('Вам нужно работать');
}else if(age < 59) {
    console.log();
    alert('вам скоро на пенсию');
}else if(age < 100) {
    alert('Вы пенсионер');
}else {
    console.log('что-то пошло не так!!!');
}


//задание №2

let time = +prompt('Введите время');

if(time < 6 ) {
    alert(time + ' часа ночи');
}else if(time < 10 ) {
    alert(time + ' часов утра');
}else if(time < 17 ) {
    alert(time + ' часа дня');
}else if(time < 23 ) {
    alert(time + ' часов вечера');
}else {
    console.log('Конец!');
}

//задание №3

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = +prompt('Введите третье число');

if(a < b && a > c || a > b && a < c) {
    alert('Среднее число является ' + a);
}else if(b < a && b > c || b > a && b < c) {
    alert('Среднее число является ' + b);
}else if(c < a && c > b || c > a && c < b) {
    alert('Среднее число является ' + c);
}else {
    alert('Ошибка!!!');
}