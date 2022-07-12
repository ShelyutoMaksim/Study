function findOutlier(integers) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0 || integers[i] === 0) {
            a += 1;
        }else {
            b += 1;
        }
    }
    if (a === 1 && b > 1) {
        for (let i = 0; i < integers.length; i++)
        if (integers[i] % 2 === 0 || integers[i] === 0)
            return integers[i];
    }
    if (b === 1 && a > 1) {
        for (let i = 0; i < integers.length; i++)
            if (integers[i] % 2 !== 0 && integers[i] !== 0)
        return integers[i];
    }
}

console.log(findOutlier([2, 4, 5, 6, 8]))