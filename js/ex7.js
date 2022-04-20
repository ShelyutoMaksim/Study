'use strict'

// Место для первой задачи
function calculateVolumeAndArea(a) {
    let c;
    if (typeof (a) === 'string' || a < 0 || Number.isInteger(a) === false) {
        c = 'При вычислении произошла ошибка';
    } else {
        let volume = Math.pow(a, 3);
        let area = 6 * Math.pow(a, 2);
        c = `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
    return (c);
}

console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(a) {
    let c;
    if (typeof (a) === 'string' || a < 0 || Number.isInteger(a) === false) {
        c = 'Ошибка. Проверьте правильность введенного номера места';
    } else {
        if (a < 1 || a > 36) {
            c = 'Таких мест в вагоне не существует';
        } else {
            c = Math.ceil(a / 4);
        }
    }
    return (c);
}
console.log(getCoupeNumber(2))