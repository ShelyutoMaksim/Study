'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


function isBudgetEnough() {
    let coast = 0;
    shoppingMallData.shops.forEach ((item) => {
        coast += item.length * item.width * shoppingMallData.height * shoppingMallData.moneyPer1m3;
    });
    if (coast > shoppingMallData.budget) {
        console.log('Бюджета недостаточно');
    } else {
        console.log('Бюджета достаточно');
    }

}
isBudgetEnough();