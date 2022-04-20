// Место для первой задачи
function sayHello(a) {
    let str = 'Привет, ';
    return (`${str}${a}`);
}

// Место для второй задачи
function returnNeighboringNumbers(a) {
    let arr = [a-1, a ,a+1];
    return(arr);
}

// Место для третьей задачи
function getMathResult(a,b) {
    let c = 0;
    if (typeof (b) === 'string' || b <= 0) {
        b = 1;
    }
    for (let i = 1; i <= b; i++) {
        if (i === 1) {
            c += a*i;
        } else {
            c += `---${a*i}`;
        }
    }
    return (c);
}