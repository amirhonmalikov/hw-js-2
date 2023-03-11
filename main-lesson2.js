//Задание №1

// let a = +prompt('Введите число');
// let b = +prompt('Введиет степень');
// let item = a**b
// alert(item);

//Задание №2

let a = +prompt('Введите число');
let b = prompt('Введите символ');
let c = prompt('Введите конечный символ');

for(let i = 0; i < a; i++) {
    let line = ''
    for(let g = 0; g < i; g++) {
        line = line + c
    }
    console.log(line);
}