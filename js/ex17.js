'use strict';

function amountOfPages(summary) {
    let str = '';
    let n = 0;
    let newNum = 0;
    while (str.length <= summary - 1) {
        n++;
        str += `${n}`;
        newNum = n;
    }
    return newNum;

}

console.log(amountOfPages(1095))