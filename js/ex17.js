'use strict';

function amountOfPages(summary) {
    let str = '';
    let n = 0;
    while (str.length <= summary - 1) {
        n++;
        str += `${n}`;
    }
    return n;
}

console.log(amountOfPages(25))