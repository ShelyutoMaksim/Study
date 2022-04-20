'use strict'

// Место для первой задачи
function getTimeFromMinutes(a) {
    let b;
    let c;
    let d;
    b = Math.floor(a / 60);
    c = a - b * 60;
    if (typeof (a) == 'string' || a < 0 || Number.isInteger(a) === false) {
        d = 'Ошибка, проверьте данные';
    } else {
        if (b === 0 || b > 4) {
            d = `Это ${b} часов и ${c} минут`;
        }
        if (b > 1 && b < 5) {
            d = `Это ${b} часа и ${c} минут`;
        }
        if (b === 1) {
            d = `Это ${b} час и ${c} минут`;
        }
    }
    return (d);
}


// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    let arr = [a, b, c, d];
    let e;
    if (typeof(a) === 'string' || typeof(b) === 'string' || typeof(c) === 'string' || typeof(d) === 'string') {
        e = 0;
    } else {
        e = arr.sort((a, b) => b - a)[0];
    }
    return (e);
}

console.log(findMaxNumber(10, 37, 25, 250))