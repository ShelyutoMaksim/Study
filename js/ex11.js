'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return `Семья пуста`;
    } else {
        return `Семья состоит из: ${arr.join(' ')} `;
    }

}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let a= '';
    for (let i = 0; i < arr.length; i++) {
        a += `${arr[i].toLowerCase()}\n`;
    }
    return a;
}
 console.log(standardizeStrings(favoriteCities))