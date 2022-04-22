'use strict'

function fib(a) {
    let f = [0, 1];
    let b;
    if (a === 0 || typeof (a) != 'number' || !Number.isInteger(a)){
        return '';
    }
    if (a === 1) {
        b = '0';
    }
    if (a === 2) {
        b = '0 1';
    }
    if (a >= 3) {
        for (let i = 2; i < a; i++) {
            f.push(f[i-2] + f[i-1]);
                }
        b = f.join(' ');
    }
    return b;
}

console.log(fib(1));