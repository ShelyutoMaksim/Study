'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(students) {
    let arr1 = students.sort();
    let firstGroup = [];
    let secondGroup = [];
    let thirdGroup = [];
    let str = 'Оставшиеся студенты: ';
    let resultArr = [];
    for (let i = 0; i < arr1.length; i++) {

        if (i >= 0 && i <= 2) {
            firstGroup.push(arr1[i]);
        }

        if (i >= 3 && i <= 5) {
            secondGroup.push(arr1[i]);
        }

        if (i >= 6 && i <= 8) {
            thirdGroup.push(arr1[i]);
        }

        if (i === 9) {
            str += `${arr1[i]}`;
        }

        if (i > 9) {
            str += `, ${arr1[i]}`;
        }
    }
    if (arr1.length <= 9) {
        str += '-';
    }
    resultArr.push(firstGroup, secondGroup, thirdGroup, str);

    return(resultArr);

}

sortStudentsByGroups(students);
if (typeof(b) === 'string' || b<=0) {
    b = 1;
    c = Math.pow (a,b);
} else {
    c = Math.pow (a,b);
}