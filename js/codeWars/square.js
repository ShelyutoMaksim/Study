function squareDigits(num) {
    num = num.toString().split('');
    for (let i = 0; i < num.length; i++) {
        num[i] *= num[i];
    }
    return +(num.join(''));
}

console.log(squareDigits(123));