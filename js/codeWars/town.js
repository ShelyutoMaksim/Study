function nbYear(pFirst, percent, aug, pResult) {
    // pFirst + (pFirst * percent / 100) + aug
    let result = pFirst;
    let i = 0
    while (result < pResult){
        result += (result * percent / 100) + aug;
        i++;
    }
    return i;
}
// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// console.log(nbYear(1500000, 0.25, 1000, 2000000))
console.log(nbYear(1000, 2, 50, 1200))