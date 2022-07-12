function divCon(x){
    let sumOfStrings = 0;
    let sumOfNumbers = 0;
    for (let i = 0; i <x.length; i++){
        if (typeof (x[i]) == 'string'){
            sumOfStrings += +(x[i]);
        }else {
            sumOfNumbers += +(x[i]);
        }
    }
    return sumOfNumbers - sumOfStrings;
}
console.log(divCon([9, 3, '7', '3']))