function solution(number){
    let arr = [];
    let resSum = 0;
    for (let i = 1; i < number; i++){
        arr[i - 1] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0){
            resSum += arr[i];
            // arr.splice(i,1);
        }
        if (arr[i] % 5 === 0){
            resSum += arr[i];
        }
    }
    return resSum
}
console.log(solution(10))